import bookMeetingModel from "../models/BookingMeeting.js";
const getAllBookMeetings = async (req, res) => {
    try {
        const bookMeeting = await bookMeetingModel.find({});
        return res.status(200).send({ success: true, message:"book meeting data retrieved successfully", data:bookMeeting });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the book meeting data"})
      }
};
const getBookMeetingById = async (req, res) => {
    try {
        const bookMeeting = await bookMeetingModel.find({_id:req.params.id});
        return res.status(200).send({ success: true, message:"book meeting data retrieved successfully", data:bookMeeting });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the book meeting data"})
      }
};
const addBookMeeting = async (req, res) => {
  try {
    const {datetime, idUser, isGuest, idAdmin}=req.body
          const newbookMeeting = new bookMeetingModel({
            datetime, idUser, isGuest, idAdmin
        });
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

const updateBookMeetingById = async (req, res) => {
    let body=req.body
    try{
    const updatebookMeeting = await bookMeetingModel.findOneAndUpdate({_id:req.params.id}, {$set:body});
    return res.status(200).send({success:true, message:"The book meeting data has been updated"})
}catch(error){
    console.log(error)
   return res.status(410).send({error:true, message:"The is a problem validating the book meeting data", data:error})

}
};
const deleteBookMeeting = async (req, res) => {
  try {
    const deletedbookMeeting = await bookMeetingModel
      .findOneAndDelete({
        _id: req.params.id,
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
  addBookMeeting,
  updateBookMeetingById,
  deleteBookMeeting
};
export default controllers;
