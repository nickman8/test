import Contact from "@components/Contacts/Contact/Contact";
import { selectContacts } from "@redux/contactsSlice";
import React from "react";
import { useAppSelector } from "src/app/hooks";

import styles from "./ContactList.module.scss";

const defaultPicture = "https://avt-18.foto.mail.ru/inbox/vint06/_avatar180?";
const defaultName = "No name";

const ContactsList = () => {
  const contacts = useAppSelector(selectContacts);

  return (
    <div className={styles.container}>
      {contacts.map(({ name, phoneNumber, tags, img }, index) => (
        <Contact
          name={name || defaultName}
          phoneNumber={phoneNumber}
          url={img?.url || defaultPicture}
          tags={JSON.stringify(tags)}
          key={String(index)} // TODO подумать
        />
      ))}
    </div>
  );
};

export default ContactsList;
