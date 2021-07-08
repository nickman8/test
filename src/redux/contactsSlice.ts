import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "src/api/auth";
import { getAllTags, getFirstContacts } from "src/api/Api";
import { RootState } from "src/app/store";
import { makeStringFromTagObject } from "@helpers/helpers";
import { ISideBarState } from "@containers/SideBar/SideBarContainer";

interface IContactsSlide {
  contacts: any[];
  loading: boolean;
  accessToken: string;
  lastContactNumber: number;
  totalCount: number;
  tags: string[];
  filters: ISideBarState;
}

const filtersInitialState = {
  tagsToInclude: [],
  tagsToExclude: [],
  sentMessageFilter: { min: 0, max: 0 },
  receivedMessageFilter: { min: 0, max: 0 },
};

const initialState: IContactsSlide = {
  contacts: [],
  loading: false,
  accessToken: "",
  lastContactNumber: 0,
  totalCount: 0,
  tags: [],
  filters: filtersInitialState,
};

export const initializeRedux = createAsyncThunk(
  "contacts/getToken",
  async () => {
    const token = await getAccessToken();
    const contactsData = await getFirstContacts(token);

    const tags = await getAllTags(token);
    const formattedTags = tags.map(makeStringFromTagObject);
    return {
      token,
      contacts: contactsData.contacts,
      totalCount: contactsData.totalCount,
      tags: formattedTags,
    };
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeRedux.pending, (state) => {
        state.loading = true;
      })
      .addCase(initializeRedux.fulfilled, (state, action) => {
        state.loading = false;

        state.accessToken = action.payload.token;
        state.contacts = action.payload.contacts;
        state.lastContactNumber = 30;
        state.totalCount = action.payload.totalCount;

        state.tags = action.payload.tags;
      });
  },
});

export const { addFilter } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const totalCount = (state: RootState) => state.contacts.totalCount;
export const allTags = (state: RootState) => state.contacts.tags;

export default contactsSlice.reducer;
