import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const mobile = e.target.mobile.value;
    const address = e.target.address.value;
    const markPercentage = e.target.markPercentage.value;

    if (!email || !password || !confirmPassword || !name || !age || !mobile || !address || !markPercentage) {
      setErrorMessage("Please fill all the input fields");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Confirm Password does not match");
      return;
    }

    try {
      const response = await axios.get(`/api/applicants?email=${email}`);
      if (response.data.length > 0) {
        setErrorMessage("Email already registered");
        return;
      }

      const newUser = {
        id: new Date().getTime(),
        email,
        password,
        name,
        age,
        mobile,
        address,
        markPercentage,
      };

      await axios.post("/api/applicants", newUser);
      window.location.href = "/login";
    } catch (error) {
      setErrorMessage("Error registering user");
    }
  };

  return (
    <div>
      <form className="container mt-2" onSubmit={handleSubmit}>
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
          {errorMessage}
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
