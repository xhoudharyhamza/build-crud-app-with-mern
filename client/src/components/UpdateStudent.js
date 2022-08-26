import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateStudent = () => {
  let [studentData, updateStudentData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  let fetchStudent = async () => {
    let res = await fetch(`/students/${params.id}`, {
      method: "GET",
    });
    if (res.status === 200) {
      let response = await res.json();
      let { name, email, contact } = response.data;
      updateStudentData({ name, email, contact, password: "" });
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  let changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    updateStudentData({ ...studentData, [name]: value });
  };
  let updateRecord = async (e) => {
    e.preventDefault();
    let { name, email, contact, password } = studentData;
    if (!name || !email || !contact || !password) {
      alert("fill all the fields");
    } else if (password.length < 6) {
      alert("Password must contain more than five characters");
    } else {
      try {
        let res = await fetch(`/students/${params.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, contact, password }),
        });
        if (res.status === 200) {
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };
  return (
    <div className="container">
      <div className="update-student">
        <div className="row">
          <div className="update-student-form">
            <div className="col-md-12 col-sm-12 col-lg-6">
              <h2>Update Student</h2>
              <form>
                <div className="form-group">
                  <label>Enter Name</label>
                  <input
                    type="name"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    required
                    onChange={changeHandler}
                    value={studentData.name}
                  />
                </div>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    required
                    onChange={changeHandler}
                    value={studentData.email}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="contact"
                    placeholder="Contact Number"
                    required
                    onChange={changeHandler}
                    value={studentData.contact}
                  />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={changeHandler}
                    value={studentData.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={updateRecord}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
