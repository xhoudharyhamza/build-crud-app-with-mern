let express = require("express");
let router = express.Router();
let Student = require("../models/studentModel");
let bcrypt = require("bcryptjs");
router.post("/students", async (req, res) => {
  let { name, email, contact, password } = req.body;
  try {
    let existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      res.status(401).json({ message: "Student is already registered" });
    } else {
      let student = await new Student({ name, email, contact, password });
      student.password = await bcrypt.hash(student.password, 12);
      await student.save();
      res.status(200).json({ message: "Student registered successfully" });
    }
  } catch (error) {
    res.status(200).json({ error: "something went wrong" });
  }
});
router.get("/students", async (req, res) => {
  let students = await Student.find();
  res.status(200).json({ data: students });
});
router.get("/students/:id", async (req, res) => {
  let _id = req.params.id;
  let student = await Student.findOne({ _id });
  res.status(200).json({ data: student });
});
router.delete("/students/:id", async (req, res) => {
  let _id = req.params.id;
  try {
    await Student.deleteOne({ _id });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
});
router.put("/students/:id", async (req, res) => {
  let _id = req.params.id;
  let { name, email, contact, password } = req.body;
  try {
    password = await bcrypt.hash(password, 12);
    let studentUpdate = await Student.updateOne(
      { _id },
      { name, email, contact, password }
    );
    if (!studentUpdate) {
      res.status(400).json({ error: "Something went wrong" });
    } else {
      console.log("record updated successfully");
      res.status(200).json({ message: "Record updated" });
    }
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
});
module.exports = router;
