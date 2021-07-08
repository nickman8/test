/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle
import { IAction, ISideBarState } from "../SideBarContainer";

export function reducer(state: ISideBarState, action: IAction) {
  switch (action.type) {
    case "INCLUDE_TAG":
      const tagsToExclude = state.tagsToExclude.filter(
        (tag) => tag !== action.payload
      );
      return {
        ...state,
        tagsToInclude: [...state.tagsToInclude, action.payload],
        tagsToExclude,
      };
    case "EXCLUDE_TAG":
      const tagsToInclude = state.tagsToInclude.filter(
        (tag) => tag !== action.payload
      );
      return {
        ...state,
        tagsToExclude: [...state.tagsToExclude, action.payload],
        tagsToInclude,
      };
    case "RECEIVED_MESSAGE_FILTER_MIN":
      return {
        ...state,
        receivedMessageFilter: {
          ...state.receivedMessageFilter,
          min: action.payload,
        },
      };
    case "RECEIVED_MESSAGE_FILTER_MAX":
      return {
        ...state,
        receivedMessageFilter: {
          ...state.receivedMessageFilter,
          max: action.payload,
        },
      };
    case "SENT_MESSAGE_FILTER_MIN":
      return {
        ...state,
        sentMessageFilter: {
          ...state.sentMessageFilter,
          min: action.payload,
        },
      };
    case "SENT_MESSAGE_FILTER_MAX":
      return {
        ...state,
        sentMessageFilter: {
          ...state.sentMessageFilter,
          max: action.payload,
        },
      };
    default:
      return state;
  }
}
