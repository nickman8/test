import React from "react";
import SideBarContainer from "@containers/SideBar/SideBarContainer";
import ContactsContainer from "@containers/ContactsContainer/ContactsContainer";

import styles from "./MainPageContainer.module.scss";

const MainPageContainer = () => (
  <div className={styles.container}>
    <SideBarContainer />
    <ContactsContainer />
  </div>
);

export default MainPageContainer;
