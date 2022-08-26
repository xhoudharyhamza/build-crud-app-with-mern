import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CreateStudent = () => {
  let navigate= useNavigate()
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  let changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };
  let createStudent = async (e) => {
    e.preventDefault();
    let { name, email, contact, password } = studentData;
    if ((!name, !email, !contact, !password)) {
      alert("Fill all fields!");
    } else if (password.length < 6) {
      alert("password length should be more than five characters");
    } else {
      try {
        let res = await fetch("/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        });
        if (res.status === 200) {
          navigate("/")
        } else if (res.status === 401) {
          alert("Student is already registered");
        } else {
          alert("Something Went Wrong");
        }
      } catch (error) {
        alert("Something Went Wrong");
      }
    }
  };
  return (
    <div className="container">
      <div className="create-student">
        <div className="row">
          <div className="create-student-form">
            <div className="col-md-12 col-sm-12 col-lg-6">
              <Link className="btn btn-success" to="/students">
                All students
              </Link>
              <h2>Create Student</h2>
              <form>
                <div className="form-group">
                  <label>Enter Name</label>
                  <input
                    type="name"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    onChange={changeHandler}
                    value={studentData.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    value={studentData.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="contact"
                    placeholder="Contact Number"
                    onChange={changeHandler}
                    value={studentData.contact}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={changeHandler}
                    value={studentData.password}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createStudent}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
