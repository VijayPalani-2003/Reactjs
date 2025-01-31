import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourses, getApplicationStatus } from "../app/slice";

//Dispatch 'getCourses' to get available courses
//Dispatch 'getApplicationStatus' to get user applications. Prevent user to reapply for same course.
import axios from "axios";

function ApplyCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applyCourse = async () => {
    /*
    To submit user application 
    Use url-  /api/applications with POST method 
    
    requestbody = {
        id:new Date().getTime(),
        applicantEmail,
        applicantName,
        courseId,
        courseName,
        status: "Pending",
        markPercentage,
      };
      
      On success display the alert - 'Your application submitted successfully' */
  };

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Course Id</th>
            <th scope="col">Course Name</th>
            <th scope="col">Available Seats</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key={"unique-key"}>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-outline-success mx-1">Apply</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplyCourse;
