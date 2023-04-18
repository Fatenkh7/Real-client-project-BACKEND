import express from 'express';
const router = express.Router();
import bookingMeetingSchema from "../controllers/bookingmeeting.js"
router.get("/",auth(["superAdmin", "admin"]), bookingMeetingSchema.getAllBookMeetings);
router.get("/:ID",auth(["superAdmin", "admin"]), bookingMeetingSchema.getBookMeetingById);
router.post("/add", bookingMeetingSchema.addBookMeeting);
router.patch("/:ID", auth(["superAdmin", "admin"]),bookingMeetingSchema.updateBookMeetingById);
router.delete("/:ID",auth(["superAdmin", "admin"]), bookingMeetingSchema.deleteBookMeeting);

export default router;