import partnerModel from "../models/Partner.js";

//get all the partner
export async function getAll(req, res, next) {
  try {
    const response = await partnerModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

//get the partner  by id
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const partner = await partnerModel.findById(ID);
    if (!partner) {
      return res.status(404).send({ success: false, message: 'Partner not found' });
    }
    res.status(200).send({ success: true, partner });
  } catch (error) {
    next(error);
  }
}

//add partner
export async function addPartner(req, res, next) {
  try {
    const { company, description, PartnerType_id, rate, link } = req.body;

    const newPartner = new partnerModel({
      company,
      description,
      PartnerType_id,
      rate,
      link,
    });

    await newPartner.save();

    res
      .status(201)
      .json({ message: "Partner  created successfully", newPartner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Update the partner
export async function editPartnerById(req, res) {
  try {
    let filter = { _id: req.params.ID };
    let update = req.body;

    const updatePartner = await partnerModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res.status(200).json({ message:"Update successfully", data: updatePartner });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

//Delete an the partner
export async function deletePartnerById(req, res, next) {
  try {
    const removePartner = await partnerModel.findOneAndDelete({
        _id: req.params.ID,
    });
    res
      .status(200)
      .json({ data: removePartner, message: "This partner  has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = { addPartner, getAll, deletePartnerById, getById, editPartnerById };
export default controller;
