import { Schema, model } from "mongoose";

const BookingSchema = Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    idPackage: {
      type: Schema.Types.ObjectId,
      ref: "Package",
    },
    idPartner: {
      type: Schema.Types.ObjectId,
      ref: "Partner",
    },
    idTypeTravel: {
      type: Schema.Types.ObjectId,
      ref: "TypeTravel",
    },
    price: {
      type: Schema.Types.Decimal128,
      default: false,
      required: [true, "Please enter the price"],
    },
    currency: {
      type: String,
      trim: true,
      required: [true, "Please enter the currency name"],
    },
  },
  {
    collection: "Booking",
    timestamps: true,
  }
);
BookingSchema.pre(["find", "findOne"], function () {
  this.populate(["idUser", "idPackage", "idPartner", "idTypeTravel"]);
});
const Model = model("Booking", BookingSchema);
export default Model;
