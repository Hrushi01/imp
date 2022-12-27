import React, { useState } from "react";
import mentorpic from "./mentor.png";

function Profile(props) {
  const { setEdit, initialValues } = props;
  const [tNotes, setTNotes] = useState(15);
  const [pendingNotes, setpendingNotes] = useState(45);
  const [assignmentApproved, setassignmentApproved] = useState(52);
  const [assignmentsPending, setassignmentsPending] = useState(65);
  return (
    <div className="flex justify-center text-center   p-5 ">
      <div className="text-left emp-profile ">
        <div className="   p-8 shadow m-2 rounded-2xl pb-12 ">
          <div className="  ">
            {/* Image below  */}
            {/* Image below  */}
            {/* Image below  */}
            {/* Image below  */}
            <div className="relative p-2  h-60 profilebg ">
              <div className=" absolute  flex justify-center items-center -bottom-16 left-12  ">
                <img
                  className="rounded-full"
                  src={mentorpic}
                  alt="Mentor-pic"
                  height="400rem"
                  width="400rem"
                />
              </div>
            </div>
            <div className="profile-head font-serif mt-20 pl-10">
              <div className=" text-xl">
                <div className=" font-medium text-3xl ">
                  {initialValues.name}
                </div>
              </div>
              <div className=" text-lg  flex text-gray-500">
                Organization:
                <div className="pl-2  ">{initialValues.organizationname}</div>
              </div>

              <div className=" ">
                <span className=" font-bold text-blue-500 pl-1">
                  {initialValues.position}
                </span>
              </div>

              {/* <div>
                Group Name:
                <span className="pl-2">{initialValues.groupname}</span>
              </div> */}

              <div className="">
                Qualification:
                <span className=" pl-2">{initialValues.qualification}</span>
              </div>

              {/* <div>
                Experience:
                <span className="pl-2"> {initialValues.experience}</span>
              </div> */}
              <div className="  text-lg p-2 ">
                <button
                  className="h-fit w-fit p-2 float-right bg-blue-500 rounded-lg"
                  onClick={setEdit}>
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact below  */}
        {/* Contact below  */}
        {/* Contact below  */}
        {/* Contact below  */}
        <div className="  ">
          <div className="    pl-10 shadow m-2 rounded-2xl p-8  ">
            <div className="profile-head font-serif  pl-8">
              <div className=" text-xl">
                <div className=" font-medium text-3xl ">Personal Details</div>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="list-disc flex  font-serif   p-5">
                  <div className=" text-lg leading-8   text-gray-500">
                    <li className="">Contact Number:</li>
                    <li className="">Email Id:</li>
                    <li>Linkdin Profile:</li>
                  </div>
                  <div className="pl-2 list-none leading-8 text-lg text-gray-500">
                    <li>123456789</li>
                    <li>Hrushi@gmail.com</li>
                    <li>https//:xyzz</li>
                  </div>
                </div>
                <div className="list-disc flex  font-serif   p-5">
                  <div className=" text-lg leading-8   text-gray-500">
                    <li>Dummyy :</li>
                    <li>Dummyy :</li>
                    <li>Dummyy :</li>
                  </div>
                  <div className="pl-2 list-none leading-8 text-lg text-gray-500">
                    <li>xyz.xyz</li>
                    <li>xyz.xyz</li>
                    <li>xyz.xyz</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Below  */}
        {/* Counter Below  */}
        {/* Counter Below  */}
        {/* Counter Below  */}

        <div className="   p-10 pl-16 shadow m-2 rounded-2xl  ">
          <div className="flex flex-col justify-center  text-center  ">
            <div className=" grid grid-cols-4 gap-1  ">
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
