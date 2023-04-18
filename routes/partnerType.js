import express from 'express';
const router = express.Router();
import { getAll, getById, addPartnerType, editPartnerTypeById, deletePartnerTypeById } from '../controllers/partnerType.js';
router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addPartnerType);
router.patch("/:ID", editPartnerTypeById);
router.delete("/:ID", deletePartnerTypeById);
export default router;