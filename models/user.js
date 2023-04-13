import mongoose  from "mongoose";
const {Schema, model}= mongoose;

const user = new Schema({
firstName: {
    type: String,
    required: [true, "First name cann't be empty"],
},
lastName: {
    type: String,
    required: [true, "Last name cann't be empty"],
},
email:{
    type:String,
    required: [true, "Email cann't be empty"],
    unique: [true, "A user is already registered with this email"],
   /* match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']*/
},
password: {
    type: String,
    required: true,
},
phone:{
    type:String,
    required:[true, 'please enter your phone number'],
    unique:[true, 'A user is already registered with this phone number']
},
title:{
    type:String
},
passportId:{
    type:String,
    unique:[true, 'A user is already found with this passport number']
},
preferredDestinations: [{type: String}],
preferredAirlines:[{type: String}]


},
{
    collection: "User",
  });

/**
 * @description Data model for users account
 */
const User = model('Users', user)
export default User;