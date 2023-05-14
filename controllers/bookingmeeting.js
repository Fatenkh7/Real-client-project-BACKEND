import bookMeetingModel from "../models/BookingMeeting.js";
/**
 * @description get all booking meeting
 */
const getAllBookMeetings = async (req, res) => {
    try {
        const bookMeeting = await bookMeetingModel.find({});
        return res.status(200).send({ success: true, message:"book meeting data retrieved successfully", data:bookMeeting });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the book meeting data"})
      }
};
/**
 * @description get a booking meeting by id
 * @param {String} req.params.ID
 */
const getBookMeetingById = async (req, res) => {
    try {
        const bookMeeting = await bookMeetingModel.find({_id:req.params.ID});
        return res.status(200).send({ success: true, message:"book meeting data retrieved successfully", data:bookMeeting });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the book meeting data"})
      }
};
/**
 * @description add a new booking meeting
 * @param {Object} req.body
 */
const addBookMeetingGuest = async (req, res) => {
  try {
    const {fullName, isGuest, email}=req.body
          const newbookMeeting = new bookMeetingModel(
            req.body
        );
        await newbookMeeting.save().then(
          function (success) {
            return res
              .status(201)
              .json({ success: true, message: "book meeting added successfully" });
          },
          function (reject) {
            return res
              .status(410)
              .send({
                error: true,
                message: "There is a problem adding the new book meeting",
                data: reject,
              });
          }
        );
    
  } catch (error) {
    return res.status(412).send({ error: true, message: "There is a problem validating the data" ,data:error.message });
  }
};
const addBookMeeting = async (req, res) => {
  try {
    const {fullName, isGuest, email}=req.body
          const newbookMeeting = new bookMeetingModel(
            req.body
        );
        await newbookMeeting.save().then(
          function (success) {
            return res
              .status(201)
              .json({ success: true, message: "book meeting added successfully" });
          },
          function (reject) {
            return res
              .status(410)
              .send({
                error: true,
                message: "There is a problem adding the new book meeting",
                data: reject,
              });
          }
        );
    
  } catch (error) {
    return res.status(412).send({ error: true, message: "There is a problem validating the data" ,data:error.message });
  }
};
/**
 * @description update a booking meeting by id
 * @param {object} req.body
 * @param {String} req.params.ID
 */
const updateBookMeetingById = async (req, res) => {
    let body=req.body
    try{
    const updatebookMeeting = await bookMeetingModel.findOneAndUpdate({_id:req.params.ID}, {$set:body});
    return res.status(200).send({success:true, message:"The book meeting data has been updated"})
}catch(error){
    console.log(error)
   return res.status(410).send({error:true, message:"The is a problem validating the book meeting data", data:error})

}
};
/**
 * @description delete a booking meeting by id
 * @param {object} req 
 * @param {String} req.params.ID
 */
const deleteBookMeeting = async (req, res) => {
  try {
    const deletedbookMeeting = await bookMeetingModel
      .findOneAndDelete({
        _id: req.params.ID,
      });
      deletedbookMeeting.then({
        function(success) {
          return res.status(200).semd({ success: true, message: "This book meeting has been deleted" });
        },
        function(reject) {
          return res.status(412).send({
              error: true,
              message: "There is a problem deleting the book meeting",
            });
        },
      });
  } catch (err) {
   return  res
      .status(410)
      .send({
        error: true,
        message: "There is a problem validating the book meeting id",
        data: err,
      });
  }
};
const controllers = {
  getAllBookMeetings,
  getBookMeetingById,
  addBookMeetingGuest,
  addBookMeeting,
  updateBookMeetingById,
  deleteBookMeeting
};
export default controllers;
