import express from 'express';
import Controllers from "../controllers/typeTravel.js"
const router = express.Router();


router.get('/', Controllers.getAllTypeTravel);
router.get('/:id', Controllers.getByIdTypeTravel);
router.post('/', Controllers.postTypeTravel);
router.put('/:id', Controllers.putTypeTravel);
router.delete('/:id', Controllers.deleteTypeTravel);


export default router;