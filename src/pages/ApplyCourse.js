import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCourses, getApplicationStatus } from "../app/slice";
import axios from "axios";

function ApplyCourse() {
  const dispatch = useDispatch();
 
  const courses = useSelector((state) => state.admissions.courses);
  const applications = useSelector((state) => state.admissions.applications);
  const loggedUser = useSelector((state) => state.admissions.loggedUser);

  useEffect(() => {
    dispatch(getCourses());
    if (loggedUser) {
      dispatch(getApplicationStatus({ email: loggedUser.email }));
    }
  }, [dispatch, loggedUser]);

  const applyCourse = async (courseId, courseName) => {
    if (applications.some((app) => app.courseId === courseId)) {
      alert("You have already applied for this course");
      return;
    }

    const course = courses.find((c) => c.id === courseId);
    if (course.availableSeats <= 0) {
      alert("No seats available for this course");
      return;
    }

    const newApplication = {
      id: new Date().getTime(),
      applicantEmail: loggedUser.email,
      applicantName: loggedUser.name,
      courseId,
      courseName,
      status: "Pending",
      markPercentage: loggedUser.markPercentage,
    };

    try {
      await axios.post("/api/applications", newApplication);
      alert(`Your application submitted successfully with ID: ${newApplication.id}`);
      dispatch(getApplicationStatus({ email: loggedUser.email }));
    } catch (error) {
      alert("Error submitting application");
    }
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
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.availableSeats}</td>
              <td>
                <button
                  className="btn btn-outline-success mx-1"
                  onClick={() => applyCourse(course.id, course.name)}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplyCourse;