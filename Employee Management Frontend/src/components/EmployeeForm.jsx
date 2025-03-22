import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import { useNavigate } from "react-router-dom";
import "./EmployeeForm.css"; 

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contact: "",
    profilePic: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleChange = (e) => {
    if (e.target.name === "profilePic") {
      setFormData({ ...formData, profilePic: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData)).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2 className="form-title">Add Employee</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="form-input"
      />
      
      <input
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleChange}
        required
        className="form-input"
      />
      
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        onChange={handleChange}
        required
        className="form-input"
      />
      
      <input
        type="file"
        name="profilePic"
        onChange={handleChange}
        className="form-input file-input"
      />
      
      <button type="submit" className="submit-btn">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
