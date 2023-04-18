import mongoose from "mongoose";
const { Schema, model } = mongoose;

const typeTravelSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the title of the TypeTravel"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Please add the type of the TypeTravel"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
  },
  { collection: "TypeTravel" }
);
const Model = model("TypeTravel", typeTravelSchema);
export default Model;
