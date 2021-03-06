import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { auth, db, provider } from "../firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { signOut, signInWithRedirect } from "firebase/auth";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import {
  enrichUserData,
  generateUserDBobject,
  generateWelcomeRoom,
  updateUserProfileOnlyInDB,
} from "../utilities/database";

const signInViaGithub = () => {
  signInWithRedirect(auth, provider);
};

const logout = async () => {
  await signOut(auth);
};

const initial = {
  currentUser: null,
  signInViaGithub,
  logout,
  pending: true,
  isNewUser: false,
  setIsNewUser: (isNewUser: boolean) => false,
  enrichedUserData: {
    displayName: null,
    email: null,
    emailVerified: false,
    isAnonymous: null,
    phoneNumber: null,
    photoURL: null,
    providerData: null,
    uid: null,
    rooms: [],
    isActive: true,
  },
  toggleUserStatus: (uid: string, oldActiveStatus: boolean) => "hi",
};

export const AuthContext = createContext(initial);

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        setPending(false);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        // This is a new signup
        if (!docSnap.exists()) {
          const welcomeRoomObj = generateWelcomeRoom(
            user.email,
            user.uid,
            user.displayName
          );
          const welcomeRoomId = welcomeRoomObj.id;
          const userObj = generateUserDBobject(user, welcomeRoomId);
          const uid = user.uid;
          try {
            setIsNewUser(true);
            await setDoc(doc(db, "users", uid), userObj);
            await setDoc(doc(db, "rooms", welcomeRoomId), welcomeRoomObj);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          const enriched = await enrichUserData(userObj);
          enrichInitiallyFromDatabase(enriched);
          navigate(`/${user.uid}/${welcomeRoomId}`, { replace: true });
        }
        // This is a returning user
        else {
          const userFromDatabase = { ...docSnap.data() };
          const enriched = await enrichUserData(userFromDatabase);
          enrichInitiallyFromDatabase(enriched);
          navigate(`/${user.uid}/${userFromDatabase.rooms[0].id}`, {
            replace: true,
          });
        }

        // This listens for changes to the user object in firestore
        // and keeps the UI in-sync with any changes to any field

        onSnapshot(doc(db, "users", user.uid), async (doc) => {
          // THESE NEXT 3 LINES WORK - DONT CHANGE
          const data = { ...doc.data() };
          const enriched = await enrichUserData(data);
          enrichInitiallyFromDatabase(enriched);
        });
      } else {
        setCurrentUser(null);
        setPending(false);
        navigate("/register", { replace: true });
      }
    });
  }, []);

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "enrichInitiallyFromDatabase":
        return action.payload;
      case "toggleUserStatus":
        return action.payload;
    }
  };

  const [enrichedUserData, dispatch] = useReducer(
    reducer,
    initial.enrichedUserData
  );

  const enrichInitiallyFromDatabase = (enriched: any) => {
    dispatch({ type: "enrichInitiallyFromDatabase", payload: enriched });
  };

  const toggleUserStatus = (uid: string, oldActiveStatus: boolean) => {
    const copyOfEnriched = { ...enrichedUserData };

    updateUserProfileOnlyInDB(uid, { isActive: !oldActiveStatus });
    copyOfEnriched.isActive = !oldActiveStatus;

    dispatch({ type: "toggleUserStatus", payload: copyOfEnriched });
  };

  const ctx: any = {
    currentUser,
    pending,
    signInViaGithub,
    logout,
    isNewUser,
    setIsNewUser,
    enrichedUserData,
    toggleUserStatus,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
