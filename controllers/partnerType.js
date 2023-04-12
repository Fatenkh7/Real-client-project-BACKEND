import partnerTypeModel from "../models/PartnerType.js";

//get all the partner type
export async function getAll(req, res, next) {
  try {
    const response = await partnerTypeModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

//get the partner type by title
export async function getByTitle(req, res, next) {
  let { TITLE } = req.params;
  partnerTypeModel.findOne({  title: TITLE }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
}

//add partner type
export async function add(req, res, next) {
  try {
    console.log(req.body);
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

//Update the partner type
export async function Edit(req, res) {
  try {
    let filter = { title: req.params.TITLE };
    let update = req.body;

    const updatePartnerType = await partnerTypeModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res.status(200).json({ data: updatePartnerType });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

//Delete an the partner type
export async function deletePartnerType(req, res, next) {
  try {
    const removePartnerType = await partnerTypeModel.findOneAndDelete({
        title: req.params.TITLE,
    });
    res
      .status(200)
      .json({ data: removePartnerType, message: "This partner type has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = { add, getAll, deletePartnerType, getByTitle, Edit };
export default controller;
