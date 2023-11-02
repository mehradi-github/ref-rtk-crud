import React, { FC } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Contact, IResult } from "../model/contact.model";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "contact", headerName: "Contact", width: 130 },
];

const DataTable: FC<IResult<Contact[]>> = ({ data }) => {
  return (
    <div>
      <DataGrid rows={data} columns={columns} checkboxSelection />
    </div>
  );
};

export default DataTable;
