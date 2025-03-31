import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL 

export const fetchEmployees = createAsyncThunk("employees/fetch", async () => {
  const token = localStorage.getItem('token'); 

  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };

  const { data } = await axios.get(`${BASE_URL}/api/employees`, config);

  return data;
});

export const addEmployee = createAsyncThunk("employees/add", async (employee) => {
  const formData = new FormData();
  Object.keys(employee).forEach((key) => formData.append(key, employee[key]));

  const token = localStorage.getItem("token");

  const { data } = await axios.post(`${BASE_URL}/api/employees`, formData, {
    headers: {
      "Authorization": `Bearer ${token}`,  
    },
  });

  return data;
});


const employeeSlice = createSlice({
  name: "employees",
  initialState: { employees: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      });
  },
});

export default employeeSlice.reducer;
