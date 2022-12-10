import React from "react";
import Button from "@mui/material/Button";
import "./Decide.css";
import logo from "../images/Keystone_logo.png";
import student from "../images/1.png";
import mentor from "../images/3.png";
import admin from "../images/2.png";

function Decide(props) {
  const {
    adminLog,
    setAdminLog,
    mentorLog,
    setmentorLog,
    studentLog,
    setStudentLog,
  } = props;
  return (
    <div className="decide">
      <img src={logo} alt="kse" className="logo" />
      <h1>Change Account Type</h1>

      <div className="buttons">
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setAdminLog(true);
          }}>
          <img src={admin} alt="admin" className="pic" />
          Admin
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setmentorLog(true);
          }}>
          <img src={mentor} alt="mentor" className="pic" />
          Mentor
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setStudentLog(true);
          }}>
          <img src={student} alt="student" className="pic" />
          Student
        </Button>
      </div>

      <div className="info">
        <h2>Hello!</h2>
        <p>Please select a suitable option</p>
      </div>
    </div>
  );
}

export default Decide;
