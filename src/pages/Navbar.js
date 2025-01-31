import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary text-light w-100 px-5 justify-content-between">
        <h3>Student Admission Portal</h3>

        {/*If logged user is admin */}
        <ul className="navbar-nav">
          <li className="nav-item px-2 pt-2">
            <Link className="tab">Applications</Link>
          </li>
          <li className="nav-item px-2 pt-2">
            <Link className="tab">Add Seats</Link>
          </li>

          <li className="nav-item mt-2 ms-5 ps-5 me-2 fw-bold">User: Admin</li>
          <li className="nav-item">
            <button className="btn btn-danger">Logout</button>
          </li>
        </ul>
        
        {/*If logged user is applicant */}
        <ul className="navbar-nav">
          <li className="nav-item px-2 pt-2">
            <Link className="tab">Apply Course</Link>
          </li>
          <li className="nav-item px-2 pt-2">
            <Link className="tab">Application Status</Link>
          </li>
          <li className="nav-item mt-2 ms-5 ps-5 me-2 fw-bold">
            User: __username__
          </li>
          <li className="nav-item">
            <button className="btn btn-danger">Logout</button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
