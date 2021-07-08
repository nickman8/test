import { totalCount } from "@redux/contactsSlice";
import React from "react";
import { useAppSelector } from "src/app/hooks";
import PlusButton from "../PlusButton/PlusButton";

import styles from "./Header.module.scss";

const ALL_CONTACTS_LABEL = "All contacts";

const Header = () => {
  const contactsTotalCount = useAppSelector(totalCount);

  return (
    <div className={styles.container}>
      <span>
        {ALL_CONTACTS_LABEL} ({contactsTotalCount})
      </span>
      <PlusButton size="24px" />
    </div>
  );
};

export default Header;
