import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();
import { addPartner, deletePartnerById, editPartnerById,getAll,getById } from '../controllers/partner.js';
router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addPartner);
router.put("/:ID", editPartnerById);
router.delete("/:ID", deletePartnerById)
export default router;
