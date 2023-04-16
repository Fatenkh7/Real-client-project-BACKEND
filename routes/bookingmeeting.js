import express from 'express';
const router = express.Router();
import bookingMeetingSchema from "../controllers/bookingmeeting.js"
router.get("/", bookingMeetingSchema.getAllBookMeetings);
router.get("/:id", bookingMeetingSchema.getBookMeetingById);
router.post("/", bookingMeetingSchema.addBookMeeting);
router.patch("/:id", bookingMeetingSchema.updateBookMeetingById);
router.delete("/:id", bookingMeetingSchema.deleteBookMeeting);

export default router;