import express from 'express';
const router = express.Router();
import { getAll, getByUsername, addAdmin, EditAdmin, deleteAdmin } from '../controllers/admin.js';

router.get("/", getAll);
router.get("/:USERNAME", getByUsername);
router.post("/add", addAdmin);
router.patch("/:USERNAME", EditAdmin);
router.delete("/:USERNAME", deleteAdmin);

export default router;
