import React from "react";
import Button from "@mui/material/Button";

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
    <div>
      <Button
        type="button"
        variant="outlined"
        onClick={() => {
          setAdminLog(true);
        }}>
        Admin
      </Button>
      <Button
        type="button"
        variant="outlined"
        onClick={() => {
          setmentorLog(true);
        }}>
        Mentor
      </Button>
      <Button
        type="button"
        variant="outlined"
        onClick={() => {
          setStudentLog(true);
        }}>
        Student
      </Button>
    </div>
  );
}

export default Decide;
