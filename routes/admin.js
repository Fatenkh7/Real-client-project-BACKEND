import express from 'express';
const router = express.Router();
import auth from "../middleware/auth.js";
import { getAll, getById, addAdmin, deleteAdminById, editAdminById, login } from '../controllers/admin.js';
router.get("/", getAll);
router.get("/:ID", auth(["superAdmin"]), getById);
router.post("/add", auth(["superAdmin"]), addAdmin);
router.patch("/:ID", auth(["superAdmin"]), editAdminById);
router.delete("/:ID",auth(["superAdmin"]), deleteAdminById);
router.post("/login", login);

export default router;
