/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
import Header from "@components/SideBarComponents/Header/Header";
import TagsContainer from "@containers/TagsContainer/TagsContainer";
import MessageCountContainer from "@containers/MessageCountContainer/MessageCountContainer";
import { Button } from "react-bootstrap";
import React, { useReducer } from "react";
import { useAppDispatch } from "src/app/hooks";
import { addFilter } from "@redux/contactsSlice";
import { reducer } from "./helpers/sideBarReducer";

import styles from "./SideBarContainer.module.scss";

interface IMessageFilter {
  min: number;
  max: number;
}

export const sideBarInitialState = {
  tagsToInclude: [],
  tagsToExclude: [],
  sentMessageFilter: { min: 0, max: 0 },
  receivedMessageFilter: { min: 0, max: 0 },
};

export interface ISideBarState {
  tagsToInclude: string[];
  tagsToExclude: string[];
  sentMessageFilter: IMessageFilter;
  receivedMessageFilter: IMessageFilter;
}

export type ActionType =
  | "INCLUDE_TAG"
  | "EXCLUDE_TAG"
  | "SENT_MESSAGE_FILTER_MIN"
  | "SENT_MESSAGE_FILTER_MAX"
  | "RECEIVED_MESSAGE_FILTER_MIN"
  | "RECEIVED_MESSAGE_FILTER_MAX"
  | string;

export interface IAction {
  type: ActionType;
  payload: string | number;
}

const BUTTON_FILTER_LABEL = "Save filters";

const SideBarContainer: React.FC = () => {
  const [state, dispatch] = useReducer<any>(reducer, sideBarInitialState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatchRedux = useAppDispatch();

  const handleClick = () => {
    dispatchRedux(addFilter(state));
  };

  return (
    <div className={styles.container}>
      <div>
        <Header />
        <TagsContainer dispatch={dispatch} state={state as any} />
        <MessageCountContainer dispatch={dispatch} state={state as any} />
      </div>
      <Button onClick={handleClick} variant="success">
        {BUTTON_FILTER_LABEL}
      </Button>
    </div>
  );
};

export default SideBarContainer;
