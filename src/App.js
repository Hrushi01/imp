import Decide from "./impcomponents/Decide";
import React, { useState } from "react";
import Login from "./login/Login";
import Signup from "./impcomponents/signup/Signup";

function App() {
  const [studentLog, setStudentLog] = useState(false);
  const [adminLog, setAdminLog] = useState(false);
  const [mentorLog, setmentorLog] = useState(false);
  const [signup, setSignup] = useState(false);

  console.log(studentLog, adminLog, mentorLog);
  return (
    <div>
      {studentLog ? (
        signup ? (
          <Signup />
        ) : (
          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
          />
        )
      ) : adminLog ? (
        signup ? (
          <Signup />
        ) : (
          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
          />
        )
      ) : mentorLog ? (
        signup ? (
          <Signup />
        ) : (
          <Login
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
          />
        )
      ) : (
        <Decide
          setStudentLog={setStudentLog}
          setAdminLog={setAdminLog}
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
      {/* <Login
        studentLog={studentLog}
        setStudentLog={setStudentLog}
        adminLog={adminLog}
        setAdminLog={setAdminLog}
        mentorLog={mentorLog}
        setmentorLog={setmentorLog}
      /> */}
    </div>
  );
}

export default App;
