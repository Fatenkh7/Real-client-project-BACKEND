import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();
import { addBooking, deleteBookingById, editBookingById, getAll, getById,} from '../controllers/booking.js';
/*router.get("/", auth(["superAdmin", "admin"]), getAll);
router.get("/:ID",auth(["superAdmin", "admin"]), getById);
router.post("/add", addBooking);
router.patch("/:ID",auth(["superAdmin", "admin"]), editBookingById);
router.delete("/:ID",auth(["superAdmin", "admin"]), deleteBookingById);*/

router.get("/",  getAll);
router.get("/:ID", getById);
router.post("/add", addBooking);
router.put("/:ID", editBookingById);
router.delete("/:ID", deleteBookingById);
export default router;
