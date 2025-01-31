import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch applications of all users
export const getApplications = createAsyncThunk("getApplications", async () => {
  const response = await axios.get("/api/applications");
  return response.data;
});

// Modify the status of an application (Approved/Rejected)
export const modifyApplicationStatus = createAsyncThunk(
  "modifyApplicationStatus",
  async (args) => {
    const { applicationId, status } = args;
    const response = await axios.patch(`/api/applications/${applicationId}`, {
      status: status,
    });
    return response.data;
  }
);

// Fetch all courses offered
export const getCourses = createAsyncThunk("getCourses", async () => {
  const response = await axios.get("/api/courses");
  return response.data;
});

// Modify the available seat count of a course
export const addSeats = createAsyncThunk("addSeats", async (args) => {
  const { courseId, updatedSeatCount } = args;
  const response = await axios.patch(`/api/courses/${courseId}`, {
    availableSeats: updatedSeatCount,
  });
  return response.data;
});

// Get applications of the logged-in user
export const getApplicationStatus = createAsyncThunk(
  "getApplicationStatus",
  async (args) => {
    const { email } = args;
    const response = await axios.get(`/api/applications?applicantEmail=${email}`);
    return response.data;
  }
);

const initialState = {
  courses: [],
  applications: [],
  loggedUser: null,  // Track logged-in user
};

export const slice = createSlice({
  name: "admissions",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setLoggedOutUser: (state) => {
      state.loggedUser = null;  // Clear the logged-in user on logout
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
      })
      .addCase(getApplicationStatus.fulfilled, (state, action) => {
        state.applications = action.payload; // Store applications of logged-in user
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.courses = action.payload; // Store all courses
      })
      .addCase(modifyApplicationStatus.fulfilled, (state, action) => {
        // Find the application and update its status
        const updatedApplications = state.applications.map((application) =>
          application.id === action.payload.id
            ? { ...application, status: action.payload.status }
            : application
        );
        state.applications = updatedApplications;
      })
      .addCase(addSeats.fulfilled, (state, action) => {
        // Update the available seats for the modified course
        const updatedCourses = state.courses.map((course) =>
          course.id === action.payload.id
            ? { ...course, availableSeats: action.payload.availableSeats }
            : course
        );
        state.courses = updatedCourses;
      });
  },
});

const { actions, reducer } = slice;
export const { setLoggedUser, setLoggedOutUser } = actions; // export setLoggedOutUser
export default reducer;