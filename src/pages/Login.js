import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../app/slice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.userPassword.value;
    const isAdmin = e.target.userType.checked;

    try {
      const url = isAdmin ? `/api/admin?email=${email}` : `/api/applicants?email=${email}`;
      const response = await axios.get(url);
      const user = response.data;

      if (user && user.password === password) {
        dispatch(setLoggedUser(user));
        navigate(isAdmin ? "/applications" : "/apply");
      } else {
        setErrorMessage("Password is incorrect");
      }
    } catch (error) {
      setErrorMessage("Email not registered");
    }
  };

  return (
    <div>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3 id="loginHeader">Admin Login / Applicant Login</h3>
          <div className="float-right ">
            <input
              type="checkbox"
              id="userType"
              name="user"
              className="form-check-input"
            />
            <label className="form-check-label ps-2">Admin</label>
          </div>
          <br />
          <p>Enter your credentials here to Login</p>
        </div>

        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="your email"
          className="form-control mt-2"
          required
        />
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="password"
          className="form-control mt-2"
          required
        />
        <p className="text-danger" id="errorMessage">
          {errorMessage}
        </p>
        <button className="btn btn-primary" id="loginButton">
          Login
        </button>
        <div className="form-group pt-3">
          <p>
            Do not have an Account{" "}
            <Link id="signupLink" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
