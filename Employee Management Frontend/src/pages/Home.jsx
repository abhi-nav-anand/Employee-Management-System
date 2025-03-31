import React from "react";
import Sidebar from "../components/Sidebar"; 
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.mainContent}>
        <EmployeeList />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", 
  },
  mainContent: {
    marginLeft: "250px",
    padding: "20px", 
    width: "calc(100% - 250px)",
  },
};

export default Home;
