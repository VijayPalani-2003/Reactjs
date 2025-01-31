import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  /*To add new user
      Use url-  /api/applicants with POST method 
      requestbody = {
        id: new Date().getTime(),
        email,
        password,
        name,
        age,
        mobile,
        address,
        markPercentage,
      };
    */

  /*To check whether entered email is already registered
      Use url-  /api/applicants?email=${<enteredEmail>} with GET method 
    */

  return (
    <div>
      <form className="container mt-2">
        <div className="form-header">
          <h3>Signup</h3>
          <p>Create new account here</p>
        </div>

        <input
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
          className="form-control mt-2"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="choose password"
          className="form-control mt-2"
          required
        />
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="confirm password"
          className="form-control mt-2"
          required
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          className="form-control mt-2"
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="your age"
          className="form-control mt-2"
        />
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="your mobile number"
          className="form-control mt-2"
        />
        <textarea
          name="address"
          rows="2"
          cols="50"
          id="address"
          placeholder="your address"
          className="form-control mt-2"
        />
        <input
          type="number"
          name="markPercentage"
          id="markPercentage"
          placeholder="Mark Percentage in 12th grade"
          className="form-control mt-2"
        />

        <p className="text-danger" id="errorMessage">
          Display error message here
        </p>
        <button className="btn btn-primary" id="submitButton">
          SIGN UP
        </button>
        <div className="form-group pt-3">
          <p>
            Already have an Account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
