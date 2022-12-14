import React from "react";
import Fields from "./Fields";
import Navbar from "./Navbar";
import Conference from "../images/conference.png";

function Login(props) {
  const { adminLog, mentorLog, studentLog, setSignup } = props;
  return (
    <div>
      <div className="">
        <Navbar
          studentLog={studentLog}
          adminLog={adminLog}
          mentorLog={mentorLog}
        />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <Fields
            studentLog={studentLog}
            adminLog={adminLog}
            mentorLog={mentorLog}
            setSignup={setSignup}
          />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Login;
