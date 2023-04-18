import express from 'express';
const router = express.Router();
import { addBooking, deleteBookingById, editBookingById, getAll, getById,} from '../controllers/booking.js';
router.get("/", auth(["superAdmin", "admin"]), getAll);
router.get("/:ID",auth(["superAdmin", "admin"]), getById);
router.post("/add",auth(["superAdmin", "admin"]), addBooking);
router.patch("/:ID",auth(["superAdmin", "admin"]), editBookingById);
router.delete("/:ID",auth(["superAdmin", "admin"]), deleteBookingById);
export default router;
