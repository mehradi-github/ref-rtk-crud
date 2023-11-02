import React, { FC, useEffect } from "react";
import { useContactsQuery } from "../services/contactsApi";
import DataTable from "../Datatable";

const Contacts: FC = () => {
  const { data, isLoading, error } = useContactsQuery();
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  if (isLoading) return <h3>Loading ...</h3>;

  data ? console.log(data) : "";
  return data ? (
    <div>
      <DataTable data={data.data} />
    </div>
  ) : (
    <div> No Result !</div>
  );
};
export default Contacts;
