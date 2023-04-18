import express from 'express';
import Controllers from '../controllers/news.js';
const router = express.Router();

router.get('/', Controllers.getAllNews);
router.get('/:ID', Controllers.getByIdNews);
router.post('/add', Controllers.postNews);
router.put('/:ID', Controllers.putNews);
router.delete('/:ID', Controllers.deleteNews);

export default router;