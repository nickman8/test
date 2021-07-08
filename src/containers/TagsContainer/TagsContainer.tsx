import React from "react";
import Tags from "@components/SideBarComponents/Tags/Tags";
import { IAction, ISideBarState } from "@containers/SideBar/SideBarContainer";

interface ITagsContainer {
  dispatch: (payload: IAction) => void;
  state: ISideBarState;
}

const INCLUDE_TAGS_LABEL = "Include tags";
const EXCLUDE_TAGS_LABEL = "Exclude tags";

const TagsContainer: React.FC<ITagsContainer> = ({ dispatch, state }) => (
  <div>
    <h5>{INCLUDE_TAGS_LABEL}</h5>
    <Tags type="INCLUDE_TAG" dispatch={dispatch} state={state} />
    <h5>{EXCLUDE_TAGS_LABEL}</h5>
    <Tags type="EXCLUDE_TAG" dispatch={dispatch} state={state} />
  </div>
);

export default TagsContainer;
