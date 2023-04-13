import express from 'express';
const router = express.Router();
import { addPartner, deletePartnerById, editPartnerById,getAll,getById } from '../controllers/partner.js';

router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addPartner);
router.patch("/:ID",editPartnerById);
router.delete("/:ID",deletePartnerById)

export default router;
