import packageModel from "../models/Package.js";
/**
 * @description get all packages
 * @param {object} req 
 */
const getAllPackages = async (req, res) => {
    try {
        const packages = await packageModel.find({});
        return res.status(200).send({ success: true, message:"Packages data retrieved successfully", data:packages });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the packages data"})
      }
};
/**
 * @description get package by id
 * @param {object} req 
 */
const getPackageById = async (req, res) => {
    try {
        const packages = await packageModel.find({_id:req.params.ID});
        return res.status(200).send({ success: true, message:"Package data retrieved successfully", data:packages });
      } catch (err) {
        return res.status(412).send({error:true, message:"There is a problem retreiving the package data"})
      }
};
/**
 * @description add a package
 * @param {object} req 
 */
const addPackage = async (req, res) => {
  try {
    const {description, idImage, packageTitle, locations, duration, isCustomized}=req.body
    if(!isCustomized){
    const newPackage = new packageModel({
        description, idImage, packageTitle, locations, duration, isCustomized
    });

    await newPackage.save().then(
      function (success) {
        return res
          .status(201)
          .send({ success: true, message: "Package added successfully" });
      },
      function (reject) {
        return res
          .status(410)
          .send({
            error: true,
            message: "There is a problem adding the new package",
            data: reject,
          });
      }
    );}
    else {
        const {idCustomer}=req.body;
        const newPackage = new packageModel({
            description, idImage, packageTitle, locations, duration, isCustomized, idCustomer
        });
    
        await newPackage.save().then(
          function (success) {
            return res
              .status(201)
              .json({ success: true, message: "Package added successfully" });
          },
          function (reject) {
            return res
              .status(410)
              .send({
                error: true,
                message: "There is a problem adding the new package",
                data: reject,
              });
          }
        );
    }
  } catch (error) {
    return res.status(412).send({ error: true, message: "There is a problem validating the data" ,data:error.message });
  }
};
/**
 * @description update a package by id
 * @param {object} req 
 */
const updatePackageById = async (req, res) => {
    let body=req.body
    try{
    const updatePackage = await packageModel.findOneAndUpdate({_id:req.params.ID}, {$set:body});
    return res.status(200).send({success:true, message:"The package data has been updated"})
}catch(error){
    console.log(error)
   return res.status(410).send({error:true, message:"The is a problem validating the package data", data:error})

}
};
/**
 * @description delete a package by id
 * @param {object} req 
 */
const deletePackage = async (req, res) => {
  try {
    const deletedPackage = await packageModel
      .findOneAndDelete({
        _id: req.params.ID,
      });
      deletedPackage.then({
        function(success) {
          return res.status(200).semd({ success: true, message: "This package has been deleted" });
        },
        function(reject) {
          return res.status(412).send({
              error: true,
              message: "There is a problem deleting the package",
            });
        },
      });
  } catch (err) {
   return  res
      .status(410)
      .send({
        error: true,
        message: "There is a problem validating the package id",
        data: err,
      });
  }
};
const filterPackage = async (req, res) => {};
const controllers = {
  getAllPackages,
  getPackageById,
  addPackage,
  updatePackageById,
  deletePackage,
  filterPackage,
};
export default controllers;
