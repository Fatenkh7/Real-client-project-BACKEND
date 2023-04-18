import express from "express";
const router = express.Router();
import userControllers from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";
router.post("/add",auth(["user"]), userControllers.createUser);
router.get("/",auth(["user"]), userControllers.getAllUser);
router.get("/:ID",auth(["user"]), userControllers.getUserByParam);
router.put("/:ID",auth(["user"]),userControllers.updateUserById);
router.delete("/:ID",auth(["user"]),userControllers.deleteUserById);
router.post("/login",auth(["user"]),userControllers.login, userControllers.deleteUserById);
export default router;