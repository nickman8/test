import React from "react";
import { allTags } from "@redux/contactsSlice";
import { ListGroup } from "react-bootstrap";
import { useAppSelector } from "src/app/hooks";
import { IAction, ISideBarState } from "@containers/SideBar/SideBarContainer";
import cn from "classnames";

import styles from "./Tags.module.scss";

interface ITags {
  type: "EXCLUDE_TAG" | "INCLUDE_TAG";
  dispatch: (payload: IAction) => void;
  state: ISideBarState;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Tags: React.FC<ITags> = ({ dispatch, type, state }) => {
  const tags = useAppSelector(allTags);

  const handleClick = (e: any) => {
    const { textContent } = e.target;
    dispatch({ type, payload: textContent });
  };

  const stateType = type === "EXCLUDE_TAG" ? "tagsToExclude" : "tagsToInclude";

  const isActive = (tag: string) => state[stateType].includes(tag);

  return (
    <ListGroup className={styles.tags}>
      {tags.map((tag, index) => (
        <ListGroup.Item
          onClick={handleClick}
          className={cn({
            [styles.oddRow]: index % 2,
            [styles.active]: isActive(tag),
          })}
          style={{
            borderRadius: "10px",
          }}
          key={String(index)}
        >
          {tag}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Tags;
