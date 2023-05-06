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

router.get("/",getAll);
router.get("/:ID",getById);
router.post("/add",imageHndel, addImage);
router.put("/:ID",imageHndel, editImageById);
router.delete("/:ID", deleteImageById);

export default router;
