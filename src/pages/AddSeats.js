import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, addSeats } from "../app/slice";
import { useNavigate } from "react-router-dom";

//Dispatch 'getCourses' to get available courses
//Dispatch 'addSeats' to modify the seat count for a course
const AddSeats = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      
        <form className="container mt-5" onSubmit={handleSubmit}>
          <label className="px-2">
            Course:
            <select
              className="form-select"
              id="courseSelect"
            >
              <option value="" disabled>
                Select Course
              </option>
            </select>
          </label>
          <label className="px-2" id="availableSeats">
            Available Seats: --count--
            <input
              type="number"
              className="form-control"
              id="newSeatCount"
              placeholder="New count"
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
