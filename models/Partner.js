import mongoose from "mongoose";

const { Schema, model } = mongoose;

const partnerSchema = Schema(
  {
    company: {
      type: String,
      unique: true,
      required: [true, "Please enter the company name"],
      minLength: [3, "the company name is too short!"],
      maxLength: [25, "the company name is too long!"],
    },
    description: {
      type: String,
      minLength: [3, "the description is too short!"],
      maxLength: [25, "the description is too long!"],
    },
    PartnerType_id: {
      type: Schema.Types.ObjectId,
      ref: "PartnerType",
    },
    rate: {
      type: Schema.Types.Decimal128,
      required: [true, "Please enter the rate "],
    },
    link: {
      type: String,
      required: [true, "Please enter the company's link"],
    },
  },
  {
    collection: "Partner",
  }
);

const PartnerModel = model("Partner", partnerSchema);

export default PartnerModel;
