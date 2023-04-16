import mongoose from "mongoose";
const {Schema, model} = mongoose;

const imageschema = new Schema({
    title: {
      type: String,
        required: [true, "Please enter the image's title"],
        minLength: [3, "The title of the image is too short!"],
        maxLength: [25, "The title of the image is too long!"],
      },
      image: {
        type: String,
        required: [true, "Please enter the image's link"],
      },
  
},{
collection: 'Image'
});
const Model = model('Image', imageschema);
export default Model;