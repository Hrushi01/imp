import React, { useState } from "react";
import mentorpic from "./mentor.png";

function Profile(props) {
  const { setEdit, initialValues } = props;
  const [tNotes, setTNotes] = useState(15);
  const [pendingNotes, setpendingNotes] = useState(45);
  const [assignmentApproved, setassignmentApproved] = useState(52);
  const [assignmentsPending, setassignmentsPending] = useState(65);
  return (
    <div>
      <div className=" emp-profile">
        <div className="grid grid-cols-3 gap-y-14 gap-x-5  m-10 p-10">
          {/* Image below  */}
          {/* Image below  */}
          {/* Image below  */}
          {/* Image below  */}

          <div className="  flex justify-center items-center ">
            <img
              src={mentorpic}
              alt="Mentor-pic"
              height="400rem"
              width="400rem"
            />
          </div>

          {/* Details below  */}
          {/* Details below  */}
          {/* Details below  */}
          {/* Details below  */}

          <div className=" flex justify-between col-span-2 text-lg p-2 ">
            <div className="profile-head font-serif">
              <div>
                Mentor Name:<span className="pl-2">{initialValues.name}</span>
              </div>

              <div className=" ">
                Position:
                <span className="text-blue-600 font-bold pl-2">
                  {initialValues.position}
                </span>
              </div>

              <div>
                Group Name:
                <span className="pl-2">{initialValues.groupname}</span>
              </div>

              <div>
                Organization:
                <span className="pl-2 text-blue-600 font-bold">
                  {initialValues.organizationname}
                </span>
              </div>

              <div className="">
                Qualification:
                <span className=" pl-2">{initialValues.qualification}</span>
              </div>

              <div>
                Experience:
                <span className="pl-2"> {initialValues.experience}</span>
              </div>
            </div>
            <button
              className="h-fit w-fit p-2 float-right bg-blue-500 rounded-lg"
              onClick={setEdit}>
              Edit Details
            </button>
          </div>

          {/* Contact below  */}
          {/* Contact below  */}
          {/* Contact below  */}
          {/* Contact below  */}
          <div className="grid grid-cols-2 gap-0 text-xl ">
            <div className="list-disc leading-8 font-serif   p-5">
              <li className="">Contact Number:</li>
              <li className="">Email Id:</li>
              <li>Linkdin Profile:</li>
              <li>Dummyy:</li>
              <li>Dummyy :</li>
              <li>Dummyy :</li>
              <li>Dummyy :</li>
            </div>
            <div className="list-none leading-8 font-serif  p-5">
              <li className="">123456789</li>
              <li className="">Hrushi@gmail.com</li>
              <li>https//:xyzz</li>
              <li>xyz.xyz</li>
              <li>xyz.xyz</li>
              <li>xyz.xyz</li>
              <li>xyz.xyz</li>
            </div>
          </div>

          {/* Counter Below  */}
          {/* Counter Below  */}
          {/* Counter Below  */}
          {/* Counter Below  */}
          <div className="flex justify-center col-span-2 text-center  ">
            <div className=" grid grid-cols-2 gap-1  ">
              <div className=" flex flex-col justify-center items-center bg-orange-400 ">
                <div className=" rounded-full  w-fit p-2 text-4xl font-serif">
                  {tNotes}
                </div>
                <div className="flex justify-center items-center ">
                  Total Notes Approved
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-red-300">
                <div className="  w-fit p-2 text-4xl font-serif">
                  {pendingNotes}
                </div>
                <div className="flex justify-center items-center">
                  Pending Notes
                </div>
              </div>
              <div className="flex flex-col justify-center items-center  bg-red-200">
                <div className=" rounded-full  w-fit p-2 text-4xl font-serif">
                  {assignmentApproved}
                </div>
                <div className="flex justify-center items-center p-1">
                  Total Assignments Approved
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-orange-300 ">
                <div className=" rounded-full  w-fit p-1 text-4xl font-serif">
                  {assignmentsPending}
                </div>
                <div className="flex justify-center items-center">
                  Assignments Pending
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
