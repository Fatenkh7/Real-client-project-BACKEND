import express from 'express';
const router = express.Router();
import { addWebContent, deleteWebContentById, editWebContentById, getAll, getById,} from '../controllers/webContent.js';

router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addWebContent);
router.patch("/:ID", editWebContentById);
router.delete("/:ID", deleteWebContentById);

export default router;
