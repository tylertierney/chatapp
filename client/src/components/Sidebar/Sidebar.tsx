import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactChild, ReactChildren } from "react";

import styles from "./Sidebar.module.css";
import ViewBtn from "./ViewBtn";

interface SidebarProps {
  panelShowing: string;
  setPanelShowing: Function;
  side: string;
  panelWidth: string;
  children: ReactChild;
}

const Sidebar: React.FC<SidebarProps> = ({
  panelShowing,
  setPanelShowing,
  side,
  panelWidth,
  children,
}) => {
  const handleWindowViewToggle = () => {
    if (panelShowing === "conversations_list") {
      setPanelShowing("default");
    } else {
      setPanelShowing("conversations_list");
    }
  };

  const bgColor = useColorModeValue("brand.softwhite", "#3b3a3d");

  if (side === "left") {
    return (
      <Flex
        className={styles.windowLeft}
        width={panelWidth}
        minW={panelWidth}
        transform={
          panelShowing === "conversations_list"
            ? `translate(${panelWidth}, 0)`
            : `none`
        }
        bgColor={bgColor}
      >
        <ViewBtn
          handleWindowViewToggle={handleWindowViewToggle}
          panelShowing={panelShowing}
        />

        {children}
      </Flex>
    );
  }

  return (
    <Flex
      className={styles.windowRight}
      width={panelWidth}
      minW={panelWidth}
      left={panelShowing === "userMenu" ? "calc(100vw - 240px)" : "100vw"}
      bgColor={bgColor}
    >
      {children}
    </Flex>
  );
};

export default Sidebar;
