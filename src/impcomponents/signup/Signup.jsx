import React from "react";
import Fields from "../../login/Fields";
import Navbar from "../../login/Fields";
import Conference from "../../images/conference.png";

function Signup(props) {
  const { adminLog, mentorLog, studentLog } = props;
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
          />
        </div>
        <div className="flex justify-center items-center p-28">
          <img src={Conference} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
