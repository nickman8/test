/* eslint-disable react/button-has-type */
import React from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import PlusButton from "../PlusButton/PlusButton";

import styles from "./Contact.module.scss";

interface IContact {
  name: string;
  phoneNumber: string;
  url: string;
  tags: string;
}

interface IOverlayButton {
  tags: string;
}

const TAGS_LABEL = "Tags";

const renderTooltip = (tags: String) => (
  <Tooltip id="button-tooltip" placement="auto">
    {tags}
  </Tooltip>
);

const OverlayButton: React.FC<IOverlayButton> = ({ tags }) => (
  <OverlayTrigger
    placement="auto"
    delay={{ show: 250, hide: 40000 }}
    overlay={() => renderTooltip(tags)}
  >
    <Button size="sm" variant="success" style={{ backgroundColor: "#0ba391" }}>
      {TAGS_LABEL}
    </Button>
  </OverlayTrigger>
);

const Contact: React.FC<IContact> = ({ name, phoneNumber, url, tags }) => {
  const a = 10;
  console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <CheckCircle />
        <div className={styles.imageContainer}>
          <Image src={url} />
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.name}>{name}</span>
          <span className={styles.telephone}>{phoneNumber}</span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        {tags && <OverlayButton tags={tags} />}
        <PlusButton size="15px" />
      </div>
    </div>
  );
};

export default Contact;
