import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Student from "./Student";
const Students = () => {
  let [students, setStudents] = useState([]);
  let fetchStudents = async () => {
    let res = await fetch("/students", {
      method: "GET",
    });
    let response = await res.json();
    if (res.status === 200) {
      let data = response.data;
      setStudents(data);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <>
        <div className="all-students">
          <Link to="/create" className="btn btn-primary">
            Create Student
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {students.map((student, index) => {
              return (
                <Student
                  key={index}
                  id={student._id}
                  name={student.name}
                  email={student.email}
                  contact={student.contact}
                  password={student.password}
                />
              );
            })}
          </table>
        </div>
    </>
  );
};

export default Students;
