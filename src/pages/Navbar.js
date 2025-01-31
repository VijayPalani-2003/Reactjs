import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedOutUser } from "../app/slice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.admissions.loggedUser);

  const handleLogout = () => {
    dispatch(setLoggedOutUser());
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary text-light w-100 px-5 justify-content-between">
        <h3>Student Admission Portal</h3>

        {loggedUser ? (
          <ul className="navbar-nav">
            {loggedUser.email === "admin@abz.com" ? (
              <>
                <li className="nav-item px-2 pt-2">
                  <Link to="/applications" className="tab">
                    Applications
                  </Link>
                </li>
                <li className="nav-item px-2 pt-2">
                  <Link to="/addseats" className="tab">
                    Add Seats
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item px-2 pt-2">
                  <Link to="/apply" className="tab">
                    Apply Course
                  </Link>
                </li>
                <li className="nav-item px-2 pt-2">
                  <Link to="/status" className="tab">
                    Application Status
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item mt-2 ms-5 ps-5 me-2 fw-bold">
              User: {loggedUser.name}
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        ) : null}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
