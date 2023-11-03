import React, { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Contact: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params["id"];
  return (
    <div>
      <Link to="/contacts">Back</Link>
      <br />
      Contact {id}
    </div>
  );
};
export default Contact;
