import cloudinary from "../config/cloudinary.js";
import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
  try {
    const { name, position, contact } = req.body;

    console.log("huhiuhiu",req.body, req.file )

    if (!req.file) {
      return res.status(400).json({ message: "Profile picture is required." });
    }

    let pic = req.file.path;

    const image = await cloudinary.uploader.upload(pic, {
      folder: 'employee_images', 
    });

    const imageUrl = image.secure_url;

    const newEmployee = new Employee({
      name,
      position,
      contact,
      profilePic: imageUrl,
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message || error.toString(),
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { name, position, contact } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Profile picture is required." });
    }

    let pic = req.file.path;

    const image = await cloudinary.uploader.upload(pic, {
      folder: 'employee_images',  
    });

    const imageUrl = image.secure_url;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, position, contact, profilePic: imageUrl },
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
