import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  contact: { type: String, required: true },
  profilePic: { type: String },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
