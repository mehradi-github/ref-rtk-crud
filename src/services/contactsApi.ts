import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact, IResult } from "../model/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contacts: builder.query<IResult<Contact[]>, void>({
      query: () => "/contacts",
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
