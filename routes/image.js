import express from "express";
import imageHndel from "../middleware/imageHandel.js";
import auth from "../middleware/auth.js";
const router = express.Router();
import {
  addImage,
  deleteImageById,
  editImageById,
  getAll,
  getById,
} from "../controllers/image.js";

router.get("/",auth(["user"]),getAll);
router.get("/:ID",auth(["user"]),getById);
router.post("/add",auth(["user"]),imageHndel, addImage);
router.put("/:ID", auth(["user"]),imageHndel, editImageById);
router.delete("/:ID",auth(["user"]), deleteImageById);

export default router;
