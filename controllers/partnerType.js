import partnerTypeModel from "../models/PartnerType.js";

/**
 * @description get all the partner type
 * @param {object} req 
 */
export async function getAll(req, res, next) {
  try {
    const response = await partnerTypeModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

/**
 * @description get the partner type by id
 * @param {object} req 
 */
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const partnerType = await partnerTypeModel.findById(ID);
    if (!partnerType) {
      return res.status(404).send({ success: false, message: 'Partner type not found' });
    }
    res.status(200).send({ success: true, partnerType });
  } catch (error) {
    next(error);
  }
}

/**
 * @description add partner type
 * @param {object} req 
 */
export async function addPartnerType(req, res, next) {
  try {
    const { title} =
      req.body;

    const newPartnerType = new partnerTypeModel({
        title
    });

    await newPartnerType.save();

    res.status(201).json({ message: "Partner type created successfully", newPartnerType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * @description Update the partner type
 * @param {object} req 
 */
export async function editPartnerTypeById(req, res) {
  try {
    let filter = { _id: req.params.ID };
    let update = req.body;

    const updatePartnerType = await partnerTypeModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res.status(200).json({ message:"Update successfully",data: updatePartnerType });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

/**
 * @description Delete an the partner type
 * @param {object} req 
 */
export async function deletePartnerTypeById(req, res, next) {
  try {
    const removePartnerType = await partnerTypeModel.findOneAndDelete({
        _id: req.params.ID,
    });
    res
      .status(200)
      .json({ data: removePartnerType, message: "This partner type has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = { addPartnerType, getAll, deletePartnerTypeById, getById, editPartnerTypeById };
export default controller;
