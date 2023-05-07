import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();
import bookingMeetingSchema from "../controllers/bookingmeeting.js"
router.get("/", bookingMeetingSchema.getAllBookMeetings);
router.get("/:ID", bookingMeetingSchema.getBookMeetingById);
router.post("/add", bookingMeetingSchema.addBookMeeting);
router.patch("/:ID",bookingMeetingSchema.updateBookMeetingById);
router.delete("/:ID", bookingMeetingSchema.deleteBookMeeting);

export default router;