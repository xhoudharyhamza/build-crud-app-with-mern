import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const DeleteStudent = () => {
  let params = useParams();
  let navigate = useNavigate();
  let deleteStudent = async () => {
    try {
      let res = await fetch(`/students/${params.id}`, {
        method: "DELETE",
      });
      let response = await res.json();
      if (res.status === 200) {
        navigate("/");
      } else if (res.status === 400) {
        alert(`${params.id} cannot be deleted`);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  useEffect(() => {
    deleteStudent();
  }, []);
  return <></>;
};

export default DeleteStudent;
