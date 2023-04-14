import mongoose from "mongoose";
const { Schema, model } = mongoose;

const newsSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please add the title"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please add a description"],
    },
  },
  { collection: "News" }
);
const Model = model("News", newsSchema);
export default Model;
