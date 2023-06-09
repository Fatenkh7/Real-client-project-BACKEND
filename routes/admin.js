import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import {
  getAll,
  getById,
  addAdmin,
  deleteAdminById,
  editAdminById,
  login,
  test,
} from "../controllers/admin.js";
router.get("/", auth(["superAdmin"]), getAll);
router.get("/:ID", auth(["superAdmin", "admin"]), getById);
router.post("/add", auth(["superAdmin"]), addAdmin);
router.put("/:ID", auth(["superAdmin", "admin"]), editAdminById);
router.delete("/:ID", auth(["superAdmin"]), deleteAdminById);
router.post("/login", login);
router.post("/testAdmin", auth(["admin"]), test);
router.post("/testSuperAdmin", auth(["superAdmin"]), test);
router.post("/testUser", auth(["user"]), test);
export default router;
