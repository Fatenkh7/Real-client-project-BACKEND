import { response } from "express";
import Model from "../models/Inbox.js";
/**
 * @description get all inbox
 * @param {object} req 
 */
export async function getAllInbox(req, res, next) {
  try {
    const response = await Model.find();
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * @description get inboxby id
 * @param {object} req 
 */
export async function getByIdInbox(req, res, next) {
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
 * @description add a new inbox
 * @param {object} req 
 */
export const postInbox = async (req, res) => {
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
 * @description update inbox by id
 * @param {object} req 
 */
export async function putInbox(req, res) {
  const { ID } = req.params
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
 * @description delete inbox by id
 * @param {object} req 
 */
export async function deleteInbox(req, res) {
  let { ID } = req.params;

  try {
    let response = await Model.findOneAndDelete({ _id: ID });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}
const Controllers = {
  getAllInbox,
  deleteInbox,
  putInbox,
  postInbox,
  getByIdInbox,
};
export default Controllers;
