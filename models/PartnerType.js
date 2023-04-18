import { Schema, model } from "mongoose";

const PartnerTypeSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please enter the title for the partner"],
      trim: true,
    },
  },
  {
    collection: "PartnerType",
  }
);
const Model = model("PartnerType", PartnerTypeSchema);
export default Model;
