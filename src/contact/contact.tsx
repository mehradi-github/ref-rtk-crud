import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Contact } from "../model/contact.model";

const initialState: Contact = {
  id: "",
  name: "",
  email: "",
  contact: "",
};
const Contact: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params["id"];
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, contact } = formValue;
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
  return (
    <div>
      <Link to="/contacts">Back</Link>
      <br />
      Contact {id}
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
