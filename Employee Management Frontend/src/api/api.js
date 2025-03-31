const API_BASE_URL = import.meta.env.VITE_BASE_URL 


export const fetchEmployees = async () => {
  const response = await fetch(`${API_BASE_URL}/employees`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, 
    },
  });
  return response.json();
};

export const addEmployee = async (employeeData) => {
  const response = await fetch(`${API_BASE_URL}/employees`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: employeeData,
  });
  return response.json();
};

export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: employeeData,
  });
  return response.json();
};

export const deleteEmployee = async (id) => {
  await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
