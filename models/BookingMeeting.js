import { Schema, model } from "mongoose";

const bookingMeetingSchema = new Schema(
  {
    datetime: {
      type: Date,
    },
    idUser: { type: Schema.Types.ObjectId, ref: "User" },
    email: {
      type: String,
      required: function () {
        return this.isGuest === true;
      },
    },
    fullName: {
        type: String,
        required: function () {
          return this.isGuest === true;
        },
      },
    idAdmin: { type: Schema.Types.ObjectId, ref: "Admin" },
    isGuest: { type: Boolean },
    isConfirmed: { type: Boolean, default: false },
  },
  { collection: "BookingMeeting" }
);
bookingMeetingSchema.pre(["find", "findOne"], function () {
  this.populate(["idUser", "idAdmin"]);
});
const BookingMeeting = new model("BookingMeeting", bookingMeetingSchema);
export default BookingMeeting;
