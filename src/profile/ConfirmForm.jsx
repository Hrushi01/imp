import React from "react";

import { Formik, Form, Field } from "formik";
import "./Profile.css";

function ConfirmForm({ initialValues, setInitialvalues, setEdit }) {
  return (
    <div className="AddMeeting ">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          setEdit(false);
        }}>
        {(props) => (
          <Form className="meeting ">
            <div className="flex justify-center text-center font-semibold font-serif text-3xl">
              Mentor Details Change{" "}
            </div>
            <div className="meetingElementBlock">
              <label htmlFor="meetingTopic" className="label">
                Mentor Name:
              </label>
              <Field name="name" type="text" />
            </div>

            <div className="meetingElementBlock">
              <label htmlFor="Organization" className="label">
                Organization name:
              </label>
              <Field name="organizationname" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-5 gap-y-1">
              <div className="meetingElementBlock">
                <label htmlFor="groupname" className="label">
                  Group name:
                </label>
                <Field name="groupname" type="text" />
              </div>

              <div className="meetingElementBlock">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <Field name="email" type="text" />
              </div>
              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Position:
                </label>
                <Field name="position" type="text" />
              </div>
              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Mobile:
                </label>
                <Field name="mobile" type="text" />
              </div>

              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Qualification:
                </label>
                <Field name="qualification" type="text" />
              </div>
              <div className="meetingElementBlock">
                <label htmlFor="Mobile" className="label">
                  Experience:
                </label>
                <Field name="experience" type="text" />
              </div>
            </div>
            <div className="flex justify-center text-center">
              <button type="submit" className="">
                Submit
              </button>
            </div>

            {setInitialvalues(props.values)}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ConfirmForm;
