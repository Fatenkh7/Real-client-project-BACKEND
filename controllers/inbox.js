import { response } from "express";
import Model from "../models/Inbox.js";

export async function getAllInbox(req, res, next) {
    try {
      const response = await Model.find();
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }


  export async function getByIdInbox(req, res, next) {
    let { id } = req.params;
    try {
      const response = await Model.findOne({ _id: id });
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  export const postInbox = async (req, res) => {
    try {
      console.log(req.body)
      let doc = new Model(req.body);
      let response = await doc.save();
      // console.log(response);
      res.status(200).json({ success: true, response });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  export async function putInbox(req, res) {
    let { id } = req.params;
    let body = req.body;
  
    try {
      let response = await Model.findOneAndUpdate({ _id: id }, { $set: body });
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  export async function deleteInbox(req, res) {
    let { id } = req.params;
  
    try {
      let response = await Model.findOneAndDelete({ _id: id });
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  const Controllers = { getAllInbox, deleteInbox, putInbox, postInbox, getByIdInbox };
  export default Controllers;