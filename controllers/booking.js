import bookingModel from "../models/Booking.js";

//get all the booking
export async function getAll(req, res, next) {
  try {
    const response = await bookingModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

//get the booking by ID
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const book = await bookingModel.findById(ID);
    if (!book) {
      return res
        .status(404)
        .send({ success: false, message: "Booking not found" });
    }
    res.status(200).send({ success: true, book });
  } catch (error) {
    next(error);
  }
}

//add booking
export async function addBooking(req, res, next) {
  try {
    const { User_id, Package_id, Partner_id, TypeTravel_id, price, currency } =
      req.body;

    const newBooking = new bookingModel({
      User_id,
      Package_id,
      Partner_id,
      TypeTravel_id,
      price,
      currency,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully", newBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Update the booking
export async function editBookingById(req, res) {
  try {
    let filter = { _id: req.params.ID };
    let update = req.body;

    const updateBooking = await bookingModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res
      .status(200)
      .json({ message: "Update successfully", data: updateBooking });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

//Delete an admin
export async function deleteBookingById(req, res, next) {
  try {
    const removeBooking = await bookingModel.findOneAndDelete({
      _id: req.params.ID,
    });
    res
      .status(200)
      .json({ data: removeBooking, message: "This Booking has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = {
  addBooking,
  getAll,
  deleteBookingById,
  getById,
  editBookingById,
};
export default controller;
