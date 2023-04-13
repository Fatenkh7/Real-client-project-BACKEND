import mongoose from "mongoose";
const { Schema, model } = mongoose;

const webContentSchema = Schema(
  {
    key: {
      type: String,
      required: [true, "Please add the key"],
     
    },
    value: {
      type: String,
      required: [true, "Please add a the value"],
    },
  },
  { collection: "WebContent" }
);
const Model = model("WebContent", webContentSchema);
export default Model;
