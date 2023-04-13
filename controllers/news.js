import Model from "../models/News.js";


//get all news
export async function getAllNews(req, res, next) {
    try {
      const response = await Model.find();
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }



//get news by id
export async function getByIdNews(req, res, next) {
    let { id } = req.params;
    try {
      const response = await Model.findOne({ _id: id });
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
  
  export const postNews = async (req, res) => {
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
  
  
  export async function putNews(req, res) {
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
 
  
  export async function deleteNews(req, res) {
    let { id } = req.params;
  
    try {
      let response = await Model.findOneAndDelete({ _id: id });
      console.log(response);
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
  const Controllers = { getAllNews, deleteNews, putNews, postNews, getByIdNews };
  export default Controllers;
  