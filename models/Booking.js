import { Schema, model } from "mongoose";

const BookingSchema = Schema(
  {
    User_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Package_id: {
        type: Schema.Types.ObjectId,
        ref: "Package",
      },
      Partner_id: {
        type: Schema.Types.ObjectId,
        ref: "Partner",
      },
      TypeTravel_id: {
        type: Schema.Types.ObjectId,
        ref: "TypeTravel",
      },
    price: {
        type: Schema.Types.Decimal128,
      default: false,
    },
  },
  {
    collection: "Booking",
    timestamps: true
  }
);
const Model = model("Booking", BookingSchema);
export default Model;
