import Model from "../models/News.js";

/**
 * @description get all news
 * @param {object} req
 */
export async function getAllNews(req, res, next) {
  try {
    const response = await Model.find();
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

/**
 * @description get a news by id
 * @param {object} req
 */
export async function getByIdNews(req, res, next) {
  let { ID} = req.params;
  try {
    const response = await Model.findOne({ _id: ID });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

/**
 * @description add a news
 * @param {object} req
 */
export const postNews = async (req, res) => {
  try {
    console.log(req.body);
    let doc = new Model(req.body);
    let response = await doc.save();
    // console.log(response);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
/**
 * @description update news by id
 * @param {object} req 
 */
export async function putNews(req, res) {
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
 * @description delete a news by id
 * @param {object} req 
 */
export async function deleteNews(req, res) {
  let { ID } = req.params;

  try {
    let response = await Model.findOneAndDelete({ _id: ID });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

const Controllers = { getAllNews, deleteNews, putNews, postNews, getByIdNews };
export default Controllers;
