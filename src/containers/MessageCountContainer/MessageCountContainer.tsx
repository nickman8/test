import React from "react";
import MessageCountComponent from "@components/SideBarComponents/MessageCountComponent/MessageCountComponent";
import { IAction, ISideBarState } from "@containers/SideBar/SideBarContainer";

interface IMessageCountContainer {
  dispatch: (payload: IAction) => void;
  state: ISideBarState;
}

const MessageCountContainer: React.FC<IMessageCountContainer> = ({
  dispatch,
  state,
}) => (
  <div>
    <MessageCountComponent
      dispatch={dispatch}
      state={state}
      label="Message sent"
      type="SENT_MESSAGE_FILTER"
    />
    <MessageCountComponent
      dispatch={dispatch}
      state={state}
      label="Message received"
      type="RECEIVED_MESSAGE_FILTER"
    />
  </div>
);

export default MessageCountContainer;
