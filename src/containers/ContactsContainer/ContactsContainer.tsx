import React from "react";
import Header from "@components/Contacts/Header/Header";
import SearchContacts from "@components/Contacts/SearchContacts/SearchContacts";
import ContactsAction from "@components/Contacts/ContactsActions/ContactsAction";
import ContactsList from "@containers/ContactsList/ContactsList";

import styles from "./ContactsdContainer.module.scss";

const ContactsContainer = () => (
  <div className={styles.container}>
    <Header />
    <SearchContacts />
    <ContactsAction />
    <ContactsList />
  </div>
);

export default ContactsContainer;
