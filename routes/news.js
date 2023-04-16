import express from 'express';
import Controllers from '../controllers/news.js';
const router = express.Router();


router.get('/', Controllers.getAllNews);
router.get('/:id', Controllers.getByIdNews);
router.post('/', Controllers.postNews);
router.put('/:id', Controllers.putNews);
router.delete('/:id', Controllers.deleteNews);


export default router;