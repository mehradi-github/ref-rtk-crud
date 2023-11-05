import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
  Fragment,
  useState,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Contact as contactModel } from "../model/contact.model";
import { Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteContactMutation } from "../services/contactsApi";

const initialState: contactModel = {
  id: "",
  name: "",
  email: "",
  contact: "",
};
const Contact: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id: string | undefined = params["id"];
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, contact } = formValue;
  const [deleteContact] = useDeleteContactMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!name && !email && !contact) {
      // TODOS:Show Error
    } else {
    }
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleDelete = async (id: string) => {
    await deleteContact(id);
    //TODO: Showing Notify
  };

  return (
    <div>
      {/* <Link to="/contacts">Back</Link> */}
      <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
        <Button
          variant="text"
          onClick={() => {
            navigate("/contacts");
          }}
        >
          Back
        </Button>

        {id ? (
          <Fragment>
            <Button variant="contained" color="success">
              Save
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Fragment>
        ) : (
          <Button variant="contained" color="primary">
            Add
          </Button>
        )}
      </Stack>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Enter name ..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Enter email ..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          placeholder="Enter contact ..."
          value={contact}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
export default Contact;
