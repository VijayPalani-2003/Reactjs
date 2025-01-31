import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApplicationStatus } from "../app/slice";

//Dispatch 'getApplicationStatus' to get all user applications.
function ApplicationStatus() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Your Applications</h3>
      {/* If user haven't applied for any course*/}
      <p>You have not applied for any course.</p>
      {/* If any application is available, display data in table*/}
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
          <tr key={"unique-key"}>
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

export default ApplicationStatus;
