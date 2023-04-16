import { Schema, model } from "mongoose";

const bookingMeetingSchema= new Schema({
    datetime:{
        type:Date,
    },
    idUser:{type:Schema.Types.ObjectId},
    idAdmin:{type:Schema.Types.ObjectId},
    isGuest:{type:Boolean}
}, {collection:"BookingMeeting"})

const BookingMeeting=new model("BookingMeeting", bookingMeetingSchema);
export default BookingMeeting;