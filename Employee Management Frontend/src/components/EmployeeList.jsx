import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/employeeSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 
const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  const columns = [
    {
      name: "Profile",
      selector: (row) => (
        <img
          src={row.profilePic}
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
      grow: 0.5,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row._id)}
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
            <FaEdit/>
          </button>
          <button
            onClick={() => handleDelete(row._id)}
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
            <FaTrashAlt />
          </button>
        </div>
      ),
      grow: 1,
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "#4B0082" }}>Employee List</h2>
      <DataTable
        columns={columns}
        data={employees}
        noHeader
        pagination
        highlightOnHover
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#D8BFD8",
              color: "#4B0082",
            },
          },
          headCells: {
            style: {
              padding: "10px",
              borderBottom: "1px solid #ddd",
              fontSize:"16px",
              fontWeight: "bold",
            },
          },
          cells: {
            style: {
              padding: "10px",
              borderBottom: "1px solid #ddd",
            },
          },
        }}
      />
    </div>
  );
};

export default EmployeeList;
