import mongoose from "mongoose";

const { Schema, model } = mongoose;

const partnerSchema = Schema(
  {
    company: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please enter the company name"],
      minLength: [3, "the company name is too short!"],
    },
    description: {
      type: String,
      trim: true,
      minLength: [3, "the description is too short!"],
    },
    idPartnerType: {
      type: Schema.Types.ObjectId,
      ref: "PartnerType",
    },
    rate: {
      type: Schema.Types.Decimal128,
      required: [true, "Please enter the rate "],
    },
    link: {
      type: String,
      trim: true,
      required: [true, "Please enter the company's link"],
    },
  },
  {
    collection: "Partner",
  }
);
partnerSchema.pre(["find", "findOne"], function () {
  this.populate(["idPartnerType"]);
});
const PartnerModel = model("Partner", partnerSchema);
export default PartnerModel;
