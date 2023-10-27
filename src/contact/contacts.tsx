import React, { FC, useEffect } from "react";
import { useContactsQuery } from "../services/contactsApi";

const Contacts: FC = () => {
  const { data, isLoading, error } = useContactsQuery();
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  if (isLoading) return <h3>Loading ...</h3>;

  data ? console.log(data) : "";
  return <div>Contact</div>;
};
export default Contacts;
