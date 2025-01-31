import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApplications,
  modifyApplicationStatus,
  getCourses,
} from "../app/slice";
import { useNavigate } from "react-router-dom";

function ViewApplications() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* To Approve/ Reject an application dispatch 'modifyApplicationStatus'
     To get all user applications dispatch 'getApplications'
     To get all course details dispatch 'getCourses' to know seat availability
  */

  return (
    <div className="container mt-3">
      <h4 className="text-primary">New Applications</h4>
      <p>No new applications</p> {/* If there are no new applications */}
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
          <tr key={"unique-key"}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-success mx-1">Approve</button>
              <button className="btn btn-danger mx-1">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <h4 className="text-primary">Approved Applications</h4>
      <p>No approved applications</p>
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
          <tr key={"unique-key"}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <h4 className="text-primary">Rejected Applications</h4>
      <p>No rejected applications</p>
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
          <tr key={"unique-key"}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewApplications;
