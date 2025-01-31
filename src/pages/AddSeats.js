import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, addSeats } from "../app/slice";


const AddSeats = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.admissions.courses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newSeatCount, setNewSeatCount] = useState("");

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCourse && newSeatCount) {
      dispatch(addSeats({ courseId: selectedCourse.id, updatedSeatCount: parseInt(newSeatCount) }));
      alert("Seats updated successfully");
      setSelectedCourse(null);
      setNewSeatCount("");
    }
  };

  return (
    <div>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <label className="px-2">
          Course:
          <select
            className="form-select"
            id="courseSelect"
            onChange={(e) => {
              const course = courses.find((c) => c.id === parseInt(e.target.value));
              setSelectedCourse(course);
            }}
          >
            <option value="" disabled>
              Select Course
            </option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name} (Id: {course.id})
              </option>
            ))}
          </select>
        </label>
        <label className="px-2" id="availableSeats">
          Available Seats: {selectedCourse ? selectedCourse.availableSeats : "--count--"}
          <input
            type="number"
            className="form-control"
            id="newSeatCount"
            placeholder="New count"
            value={newSeatCount}
            onChange={(e) => setNewSeatCount(e.target.value)}
          />
        </label>
        <input
          type="submit"
          className="btn btn-primary"
          id="submitButton"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddSeats;