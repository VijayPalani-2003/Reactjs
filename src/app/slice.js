import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getApplications = createAsyncThunk("getApplications", async () => {
  /* Get applications of all user  
     Use url-  /api/applications with GET method */

});

export const modifyApplicationStatus = createAsyncThunk(
  "modifyApplicationStatus",
  async (args) => {
    /* To modify the status of Application  
       Use url-  /api/applications/${id} with PATCH method 
       Req body - { status: <newStatus> },  newstatus can be Approved/Rejected*/

});

export const getCourses = createAsyncThunk("getCourses", async () => {
   /* Get all courses offered 
     Use url-  /api/courses with GET method */

});

export const addSeats = createAsyncThunk("addSeats", async (args) => {
  /* To modify seatCount of Course 
    Use url-  /api/courses/${id} with PATCH method 
    Req body - { availableSeats: <updatedSeatCount> } */

});

export const getApplicationStatus = createAsyncThunk(
  "getApplicationStatus",
  async (args) => {
    /* Get applications of logged user  
     Use url-  /api/applications?applicantEmail=${email} with GET method */
  }
);

const initialState = {
  courses: []
};

export const slice = createSlice({
  name: "admissions",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {

    },
  },

  extraReducers: (builder) => {
    builder.addCase(getApplications.fulfilled, (state, action) => {
      
    });

    builder.addCase(getApplicationStatus.fulfilled, (state, action) => {
      
    });

    builder.addCase(getCourses.fulfilled, (state, action) => {
      
    });
  },
});

const { actions, reducer } = slice;
export const { setLoggedUser } = actions;
export default reducer;
