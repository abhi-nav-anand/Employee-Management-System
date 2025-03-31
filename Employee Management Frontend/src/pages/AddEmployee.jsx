import React from "react";
import Sidebar from "../components/Sidebar"; 
import EmployeeForm from "../components/EmployeeForm";

const AddEmployee = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <EmployeeForm />
      </div>
    </div>
  );
};

export default AddEmployee;
