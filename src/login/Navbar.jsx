import React from "react";

function Navbar(props) {
  const {
    adminLog,

    mentorLog,
    studentLog,
  } = props;
  return (
    <div className=" flex justify-between items-center h-16 navbar ">
      <div className="flex justify-center items-center  ">
        <div className="font-serif text-white p-5 pr-3 flex justify-center text-3xl ">
          I.M.P
        </div>
      </div>
      <div className="flex text-white font-semibold p-5  justify-center items-center ">
        <div className="p-1  pr-3 pl-3 border-gray-400 hover:cursor-pointer flex flex-col justify-center items-center">
          You have Logged in as
          {adminLog ? (
            <div> Admin</div>
          ) : mentorLog ? (
            <div> Mentor</div>
          ) : studentLog ? (
            <div> Student</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
