import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ApplyCourse from "./pages/ApplyCourse";
import ApplicationStatus from "./pages/ApplicationStatus";
import ViewApplications from "./pages/ViewApplications";
import AddSeats from "./pages/AddSeats";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<ApplyCourse />} />
          <Route path="/status" element={<ApplicationStatus />} />
          <Route path="/applications" element={<ViewApplications />} />
          <Route path="/addseats" element={<AddSeats />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
