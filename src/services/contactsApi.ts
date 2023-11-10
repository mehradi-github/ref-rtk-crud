import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact, IResult } from "../model/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5002" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contacts: builder.query<IResult<Contact[]>, void>({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),
    contact: builder.query<IResult<Contact>, string>({
      query: (id) => `/contacts/${id}`,
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: `/contacts/${contact.id}`,
        method: "PUT",
        body: contact,
      }),
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
        mode: "cors",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
