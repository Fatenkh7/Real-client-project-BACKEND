import express from 'express';
import Controllers from "../controllers/typeTravel.js"
const router = express.Router();
router.get('/', Controllers.getAllTypeTravel);
router.get('/:ID', Controllers.getByIdTypeTravel);
router.post('/add', Controllers.postTypeTravel);
router.put('/:ID', Controllers.putTypeTravel);
router.delete('/:ID', Controllers.deleteTypeTravel);
export default router;