import webContentModel from "../models/WebContent.js";

/**
 * @description get all the web content
 */
export async function getAll(req, res, next) {
  try {
    const response = await webContentModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

/**
 * @description get web content by id
 * @param {String} req.params.ID
 */
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const content = await webContentModel.findById(ID);
    if (!content) {
      return res
        .status(404)
        .send({ success: false, message: "Web content not found" });
    }
    res.status(200).send({ success: true, content });
  } catch (error) {
    next(error);
  }
}

/**
 * @description add web content
 * @param {Object} req.body
 */
export async function addWebContent(req, res, next) {
  try {
    const { key, value } = req.body;
    const newContent = new webContentModel({
      key,
      value,
    });
    await newContent.save();
    res
      .status(201)
      .json({ message: "Web content created successfully", newContent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * @description update web content by id
 * @param {String} req.params.ID
 */
export async function editWebContentById(req, res) {
  try {
    let filter = { _id: req.params.ID };
    let update = req.body;
    const updateContent = await webContentModel.findOneAndUpdate(
      filter,
      update,
      {
        //for save it in the database
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: "Update successfully", data: updateContent });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

/**
 * @description delete web content by id
 * @param {String} req.params.ID
 */
export async function deleteWebContentById(req, res, next) {
  try {
    const removeContent = await webContentModel.findOneAndDelete({
      _id: req.params.ID,
    });
    res
      .status(200)
      .json({ data: removeContent, message: "This Booking has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = {
  addWebContent,
  getAll,
  deleteWebContentById,
  getById,
  editWebContentById,
};
export default controller;
