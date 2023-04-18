import mongoose from "mongoose";
const { Schema, model } = mongoose;

const webContentSchema = Schema(
  {
    key: {
      type: String,
      trim: true,
      required: [true, "Please add the key"],
    },
    value: {
      type: String,
      trim: true,
      required: [true, "Please add a value"],
    },
  },
  { collection: "WebContent" }
);
const Model = model("WebContent", webContentSchema);
export default Model;
