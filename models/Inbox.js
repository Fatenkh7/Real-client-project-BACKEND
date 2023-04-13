import mongoose from "mongoose";
const {Schema, model} = mongoose;

const inboxschema = new Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        minLength: [3, "the first name is too short!"],
        maxLength: [25, "the first name is too long!"],
      },
      lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        minLength: [3, "the lastname is too short!"],
        maxLength: [25, "the lastname is too long!"],
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Please enter your mail"],
        minLength: [15, "the mail is too short!"],
        maxLength: [35, "the mail is too long!"],
      },
    feedback:{
        type:String,
        required: [true, "Please enter the feedback for the inbox"]
    }
  
},{
collection: 'Inbox'
});
const Model = model('Inbox', inboxschema);
export default Model;