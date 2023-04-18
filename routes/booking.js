import express from 'express';
const router = express.Router();
import { addBooking, deleteBookingById, editBookingById, getAll, getById,} from '../controllers/booking.js';
router.get("/", getAll);
router.get("/:ID", getById);
router.post("/add", addBooking);
router.patch("/:ID", editBookingById);
router.delete("/:ID", deleteBookingById);
export default router;
