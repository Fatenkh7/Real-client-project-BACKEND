import express from 'express';
const router = express.Router();
import auth from "../middleware/auth.js";
import { getAll, getById, addAdmin, deleteAdminById, editAdminById, login, test } from '../controllers/admin.js';
router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addAdmin);
router.put("/:ID", editAdminById);
router.delete("/:ID", deleteAdminById);
router.post("/login", login);
router.post("/testAdmin", test);
router.post("/testSuperAdmin", test);
router.post("/testUser", test);

export default router;
