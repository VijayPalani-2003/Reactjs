import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApplications,
  modifyApplicationStatus,
  getCourses,
  addSeats,
} from "../app/slice";
//import { useNavigate } from "react-router-dom";

function ViewApplications() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const applications = useSelector((state) => state.admissions.applications);
  const courses = useSelector((state) => state.admissions.courses);

  useEffect(() => {
    dispatch(getApplications());
    dispatch(getCourses());
  }, [dispatch]);

  const handleApprove = async (applicationId, courseId) => {
    const course = courses.find((c) => c.id === courseId);
    if (course.availableSeats <= 0) {
      alert("No seats available for this course");
      return;
    }

    await dispatch(modifyApplicationStatus({ applicationId, status: "Approved" }));
    await dispatch(addSeats({ courseId, updatedSeatCount: course.availableSeats - 1 }));
    dispatch(getApplications());
  };

  const handleReject = async (applicationId) => {
    await dispatch(modifyApplicationStatus({ applicationId, status: "Rejected" }));
    dispatch(getApplications());
  };

  const newApplications = applications.filter((app) => app.status === "Pending");
  const approvedApplications = applications.filter((app) => app.status === "Approved");
  const rejectedApplications = applications.filter((app) => app.status === "Rejected");

  return (
    <div className="container mt-3">
      <h4 className="text-primary">New Applications</h4>
      {newApplications.length === 0 ? (
        <p>No new applications</p>
      ) : (
        <table className="table table-hover mb-5" id="newApplicationsTable">
          <thead>
            <tr>
              <th scope="col">Application Id</th>
              <th scope="col">Course Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Applicant Email</th>
              <th scope="col">Mark Percentage</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newApplications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.courseId}</td>
                <td>{application.courseName}</td>
                <td>{application.applicantName}</td>
                <td>{application.applicantEmail}</td>
                <td>{application.markPercentage}</td>
                <td>
                  <button
                    className="btn btn-success mx-1"
                    onClick={() => handleApprove(application.id, application.courseId)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleReject(application.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr></hr>
      <h4 className="text-primary">Approved Applications</h4>
      {approvedApplications.length === 0 ? (
        <p>No approved applications</p>
      ) : (
        <table className="table table-hover mb-5" id="approvedApplicationsTable">
          <thead>
            <tr>
              <th scope="col">Application Id</th>
              <th scope="col">Course Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Applicant Email</th>
              <th scope="col">Mark Percentage</th>
            </tr>
          </thead>
          <tbody>
            {approvedApplications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.courseId}</td>
                <td>{application.courseName}</td>
                <td>{application.applicantName}</td>
                <td>{application.applicantEmail}</td>
                <td>{application.markPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr></hr>
      <h4 className="text-primary">Rejected Applications</h4>
      {rejectedApplications.length === 0 ? (
        <p>No rejected applications</p>
      ) : (
        <table className="table table-hover mb-5" id="rejectedApplicationsTable">
          <thead>
            <tr>
              <th scope="col">Application Id</th>
              <th scope="col">Course Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Applicant Email</th>
              <th scope="col">Mark Percentage</th>
            </tr>
          </thead>
          <tbody>
            {rejectedApplications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.courseId}</td>
                <td>{application.courseName}</td>
                <td>{application.applicantName}</td>
                <td>{application.applicantEmail}</td>
                <td>{application.markPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewApplications;