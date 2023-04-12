import express from 'express';
const router = express.Router();
import { getAll, getByTitle, add, Edit, deletePartnerType } from '../controllers/partnerType.js';

router.get("/", getAll);
router.get("/:TITLE", getByTitle);
router.post("/add", add);
router.patch("/:TITLE", Edit);
router.delete("/:TITLE", deletePartnerType);

export default router;
