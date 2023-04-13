import express from "express";
const router = express.Router();
import userControllers from "../controllers/userControllers.js";
router.get("/test", (req, res)=>{res.send("batata")});
router.post("/", userControllers.createUser);
router.get("/", userControllers.getAllUser);
router.get("/:email", userControllers.getUserByParam);
router.put("/:id", userControllers.updateUserById);
router.delete("/:id", userControllers.deleteUserById)
router.post("/login", userControllers.login)
export default router;