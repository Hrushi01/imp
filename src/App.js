import Decide from "./impcomponents/Decide";
import React, { useState } from "react";
import Login from "./login/Login";

function App() {
  const [studentLog, setStudentLog] = useState(false);
  const [adminLog, setAdminLog] = useState(false);
  const [mentorLog, setmentorLog] = useState(false);

  console.log(studentLog, adminLog, mentorLog);
  return (
    <div>
      {studentLog ? (
        <Login />
      ) : adminLog ? (
        <Login />
      ) : mentorLog ? (
        <Login />
      ) : (
        <Decide
          studentLog={studentLog}
          setStudentLog={setStudentLog}
          adminLog={adminLog}
          setAdminLog={setAdminLog}
          mentorLog={mentorLog}
          setmentorLog={setmentorLog}
        />
      )}

      {/* <Decide
        studentLog={studentLog}
        setStudentLog={setStudentLog}
        adminLog={adminLog}
        setAdminLog={setAdminLog}
        mentorLog={mentorLog}
        setmentorLog={setmentorLog}
      /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
