import mongoose from "mongoose";
const { Schema, model } = mongoose;

const typeTravelSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the title of the TypeTravel"],
      trim: true,
      // match: [
      //   /^[A-Z][A-Za-z\s]+$/,
      //   "Title must start with a capital letter and only contain letters and spaces",
      // ],
    },
    type: {
      type: String,
      required: [true, "Please add the type of the TypeTravel"],
      trim: true,
      // match: [
      //   /^[A-Z][A-Za-z\s]+$/,
      //   "Type must start with a capital letter and only contain letters and spaces",
      // ],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
  },
  {collection: "TypeTravel",}
);
const Model = model("TypeTravel", typeTravelSchema);
export default Model;