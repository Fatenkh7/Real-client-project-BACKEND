import { Schema, model } from "mongoose";

const BookingSchema = new Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please enter the user"],
    },
    idPackage: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required: [true, "Please enter the package"],
    },
    idPartner: {
      type: Schema.Types.ObjectId,
      ref: "Partner",
      required: [true, "Please enter the partner"],
    },
    idTypeTravel: {
      type: Schema.Types.ObjectId,
      ref: "TypeTravel",
      required: [true, "Please enter the type of the travel"],
    },
    price: {
      type: Schema.Types.Decimal128,
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

BookingSchema.pre("find", function (next) {
  this.populate("idUser").populate("idPackage").populate("idPartner").populate("idTypeTravel");
  next();
});

const BookingModel = model("Booking", BookingSchema);

export default BookingModel;
