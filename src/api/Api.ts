/* eslint-disable import/prefer-default-export */
import { ITag } from "@helpers/helpers";
import axios from "axios";

export async function getFirstContacts(token: string) {
  const {
    data: { contacts, totalCount },
  } = await axios.get(`${process.env.REACT_APP_API_SERVER}/contacts`, {
    params: { count: 30, returnTotalCount: true },
    headers: { Authorization: `Bearer ${token}` },
  });

  return { contacts, totalCount };
}

export async function getAllTags(token: string) {
  const {
    data: { tags },
  } = await axios.get(`${process.env.REACT_APP_API_SERVER}/tags`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return tags as ITag[];
}
