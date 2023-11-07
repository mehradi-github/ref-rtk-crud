import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./services/contactsApi";
import snakbarReducer from "./snakbar/snakbarSlice";
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    snakbars: snakbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
