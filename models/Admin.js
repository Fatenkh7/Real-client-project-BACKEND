import { Schema, model } from "mongoose";

const adminSchema = Schema(
  {
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
    userName: {
      type: String,
      unique: true,
      required: [true, "Please enter your username"],
      minLength: [6, "the userame is too short!"],
      maxLength: [25, "the userame is too long!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your mail"],
      minLength: [15, "the mail is too short!"],
      maxLength: [35, "the mail is too long!"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [8, "the password is too short!"],
      maxLength: [80, "the password is too long!"],
    },
    isSuper: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Admin",
  }
);
const Model = model("Admin", adminSchema);
export default Model;
