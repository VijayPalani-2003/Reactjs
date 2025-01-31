import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationStatus } from "../app/slice";

function ApplicationStatus() {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.admissions.applications);
  const loggedUser = useSelector((state) => state.admissions.loggedUser);

  useEffect(() => {
    if (loggedUser) {
      dispatch(getApplicationStatus({ email: loggedUser.email }));
    }
  }, [dispatch, loggedUser]);

  return (
    <div className="container">
      <h3>Your Applications</h3>
      {applications.length === 0 ? (
        <p>You have not applied for any course.</p>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Application Id</th>
              <th scope="col">Course Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.courseId}</td>
                <td>{application.courseName}</td>
                <td>{application.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApplicationStatus;