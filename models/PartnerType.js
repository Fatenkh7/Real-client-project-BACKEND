import { Schema, model } from "mongoose";

const PartnerTypeSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title for the partner"],
      minLength: [3, "the title is too short!"],
      maxLength: [25, "the title is too long!"],
    },
  },
  {
    collection: "PartnerType",
  }
);
const Model = model("PartnerType", PartnerTypeSchema);
export default Model;
