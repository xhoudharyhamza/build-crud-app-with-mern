import React from "react";
import { Link } from "react-router-dom";

const Student = ({ id, name, email, contact, password }) => {
  return (
    <tbody>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{contact}</td>
        <td>{password}</td>
        <td>
          <Link className="delete-student" to={`/delete/${id}`}>
            <i className="fa-solid fa-trash-can"></i>
          </Link>
          <Link className="update-student" to={`/update/${id}`}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Student;
