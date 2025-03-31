import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";
import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("profilePic"), createEmployee);
router.get("/", authMiddleware, getEmployees);
router.get("/:id", authMiddleware, getEmployeeById);
router.put("/:id", authMiddleware, upload.single("profilePic"), updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);

export default router;
