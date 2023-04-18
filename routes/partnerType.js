import express from 'express';
const router = express.Router();
import { getAll, getById, addPartnerType, editPartnerTypeById, deletePartnerTypeById } from '../controllers/partnerType.js';
router.get("/",auth(["superAdmin", "admin"]), getAll);
router.get("/:ID",auth(["superAdmin", "admin"]), getById);
router.post("/add",auth(["superAdmin", "admin"]), addPartnerType);
router.patch("/:ID",auth(["superAdmin", "admin"]), editPartnerTypeById);
router.delete("/:ID",auth(["superAdmin", "admin"]), deletePartnerTypeById);
export default router;