export const readableErrorMessage = (msg: string) => {
  switch (msg) {
    case "auth/user-not-found":
      return "A user wasn't found at that email address";
    case "auth/wrong-password":
      return "Incorrect password";
    default:
      return "Something went wrong";
  }
};
