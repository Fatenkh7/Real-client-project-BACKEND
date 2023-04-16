import imageModel from "../models/Image.js";
import fs from "fs";
import path from "path";

//get all the Image
export async function getAll(req, res, next) {
  try {
    const response = await imageModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

//get the Image by ID
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const image = await imageModel.findById(ID);
    if (!image) {
      return res
        .status(404)
        .send({ success: false, message: "image not found" });
    }
    res.status(200).send({ success: true, image });
  } catch (error) {
    next(error);
  }
}

//add Image
export async function addImage(req, res, next) {
  try {
    const newImage = new imageModel({
      title: req.body.title,
      image: req.imagePath,
    });

    await newImage.save();

    res.status(201).json({ message: "Image created successfully", newImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//update the image
export async function editImageById(req, res, next) {
  try {
    const imageId = req.params.ID;
    const { title } = req.body;
    const imagePath = req.imagePath;

    // Find the image in the database based on the ID
    const imageToUpdate = await imageModel.findById(imageId);

    if (!imageToUpdate) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Delete the previous image
    const previousImageFilePath = imageToUpdate.image;
    fs.unlinkSync(previousImageFilePath);

    // Update the title and image path of the image
    imageToUpdate.title = title;
    imageToUpdate.image = imagePath;

    // Save the updated image to the database
    await imageToUpdate.save();

    res
      .status(200)
      .json({
        message: "Image updated successfully",
        updatedImage: imageToUpdate,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete an image
export async function deleteImageById(req, res, next) {
  try {
    const { ID } = req.params;
    const image = await imageModel.findById(ID);
    if (!image) {
      return res.status(404).send({ status: 404, message: "Not Found" });
    }
    const imagePath = image.image; // assuming the file path is stored in the 'image' field
    fs.unlinkSync(imagePath); // delete the image file
    await imageModel.findByIdAndDelete(ID); // delete the image document
    res.status(200).send({ status: 200, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
}

const controller = {
  addImage,
  getAll,
  deleteImageById,
  getById,
  editImageById,
};
export default controller;
