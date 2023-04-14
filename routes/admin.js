import express from 'express';
const router = express.Router();
import { getAll, getById, addAdmin, deleteAdminById, editAdminById } from '../controllers/admin.js';
router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addAdmin);
router.patch("/:ID", editAdminById);
router.delete("/:ID", deleteAdminById);
export default router;
