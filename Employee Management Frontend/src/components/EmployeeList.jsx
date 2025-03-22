import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/employeeSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL 

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchEmployees());
    }
  }, [dispatch, navigate]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in. Please log in first.");
      navigate("/login");
      return;
    }

    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await axios.delete(`${BASE_URL}/api/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(fetchEmployees()); 
        alert("Employee deleted successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error deleting employee:", error.response || error);
        alert("Error deleting employee! Please try again.");
      }
    } else {
      console.log("Deletion cancelled");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          gridAutoRows: "minmax(200px, auto)",
        }}
      >
        {employees.map((emp) => (
          <div
            key={emp._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {emp.profilePic && (
              <img
                src={emp.profilePic}
                alt="Profile"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
            )}
            <h3>{emp.name}</h3>
            <p>Position: {emp.position}</p>
            <p>Contact: {emp.contact}</p>

            <div>
              <button
                onClick={() => handleEdit(emp._id)}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "5px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(emp._id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
