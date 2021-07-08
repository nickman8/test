import React from "react";
import { TextRight } from "react-bootstrap-icons";

import styles from "./Header.module.scss";

const HEADER_TITLE = "AUDIENCE";
const CONTACTS_AMOUNT = "100 contacts";

const Header: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.flex}>
      <TextRight className={styles.icon} />
      <span className={styles.title}>{HEADER_TITLE}</span>
    </div>
    <span className={styles.contacts}>{CONTACTS_AMOUNT}</span>
  </div>
);

export default Header;
