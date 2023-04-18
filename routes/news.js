import express from 'express';
import Controllers from '../controllers/news.js';
import auth from "../middleware/auth.js";
const router = express.Router();

router.get('/',auth(["superAdmin", "admin"]),Controllers.getAllNews);
router.get('/:ID',auth(["superAdmin", "admin"]),Controllers.getByIdNews);
router.post('/add',auth(["superAdmin", "admin"]),Controllers.postNews);
router.put('/:ID',auth(["superAdmin", "admin"]),Controllers.putNews);
router.delete('/:ID',auth(["superAdmin", "admin"]),Controllers.deleteNews);

export default router;