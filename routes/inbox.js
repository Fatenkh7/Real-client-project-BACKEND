import express from 'express';
import Controllers from '../controllers/inbox.js';
const router = express.Router();


router.get('/', Controllers.getAllInbox);
router.get('/:id', Controllers.getByIdInbox);
router.post('/', Controllers.postInbox);
router.put('/:id', Controllers.putInbox);
router.delete('/:id', Controllers.deleteInbox);


export default router;