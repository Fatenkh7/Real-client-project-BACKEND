import Model from "../models/typeTravel.js";
/**
 * @description get all typeTravel
 * @param {object} req 
 */
export async function getAllTypeTravel(req, res, next) {
  try {
    const response = await Model.find();
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

/**
 * @description get a typeTravel by id
 * @param {String} req.params.ID
 */
async function getByIdTypeTravel(req, res, next) {
  let { ID } = req.params;
  try {
    const response = await Model.findOne({ _id: ID });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

/**
 * @description create a type travel
 * @param {object} req.body
 */
export const postTypeTravel = async (req, res) => {
  try {
    console.log(req.body, "jdhfbhjf")
    let doc = new Model(req.body);
    let response = await doc.save();
    // console.log(response);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * @description update a type Travel by id
 * @param {object} req.body
 * @param {String} req.params.ID
 */
async function putTypeTravel(req, res) {
  let { ID } = req.params;
  let body = req.body;

  try {
    let response = await Model.findOneAndUpdate({ _id: ID }, { $set: body });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * @description delete a typeTravel by id
 * @param {String} req.params.ID
 */
export async function deleteTypeTravel(req, res) {
  let { ID } = req.params;

  try {
    let response = await Model.findOneAndDelete({ _id: ID });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

const Controllers = { getAllTypeTravel, deleteTypeTravel, putTypeTravel, postTypeTravel, getByIdTypeTravel };
export default Controllers;
