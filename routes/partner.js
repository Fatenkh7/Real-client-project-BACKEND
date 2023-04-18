import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();
import { addPartner, deletePartnerById, editPartnerById,getAll,getById } from '../controllers/partner.js';
router.get("/",auth(["superAdmin", "admin"]), getAll);
router.get("/:ID",auth(["superAdmin", "admin"]), getById);
router.post("/add",auth(["superAdmin", "admin"]), addPartner);
router.patch("/:ID",auth(["superAdmin", "admin"]), editPartnerById);
router.delete("/:ID",auth(["superAdmin", "admin"]), deletePartnerById)
export default router;
