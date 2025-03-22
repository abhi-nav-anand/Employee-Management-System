import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchEmployees } from "../redux/employeeSlice";
import "../components/EmployeeForm.css"; 
const BASE_URL = import.meta.env.VITE_BASE_URL 

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.employees);

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contact: "",
    profilePic: null,
  });

  useEffect(() => {
    const employee = employees.find((emp) => emp._id === id);
    if (employee) {
      setFormData({
        name: employee.name,
        position: employee.position,
        contact: employee.contact,
        profilePic: null,
      });
    }
  }, [id, employees]);

  const handleChange = (e) => {
    if (e.target.name === "profilePic") {
      setFormData({ ...formData, profilePic: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        updatedData.append(key, formData[key]);
      }
    });

    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(`${BASE_URL}/api/employees/${id}`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, 
        },
      });

      dispatch(fetchEmployees()); 
      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Error updating employee! Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="employee-form">
      <h2 className="form-title">Edit Employee</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="file"
          name="profilePic"
          onChange={handleChange}
          className="form-input file-input"
          required
        />
        <button type="submit" className="submit-btn">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
