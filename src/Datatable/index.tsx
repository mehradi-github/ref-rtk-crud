import React, { FC } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
} from "@mui/x-data-grid";
import { Contact, IResult } from "../model/contact.model";
import {
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DataTable: FC<IResult<Contact[]>> = ({ data }) => {
  const navigate = useNavigate();
  const handleEditClick = (id: GridRowId) => () => {
    navigate(`/contact/${id}`);
  };
  const handleDeleteClick = (id: GridRowId) => () => {};
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "contact", headerName: "Contact", width: 130 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default DataTable;
