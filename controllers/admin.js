import adminModel from "../models/Admin.js";
import bcrypt from "bcryptjs";

//get all the Admins
export async function getAll(req, res, next) {
  try {
    const response = await adminModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

//get the Admins by username
export async function getByUsername(req, res, next) {
  let { USERNAME } = req.params;
  adminModel.findOne({ userName: USERNAME }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
}

//add admin
export async function addAdmin(req, res, next) {
  try {
    console.log(req.body);
    const { firstName, lastName, userName, email, password,isSuper } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new adminModel({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      isSuper,
    });

    await admin.save();

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Update the admin
export async function EditAdmin(req, res) {
  try {
    let filter = { userName: req.params.USERNAME };
    let update = req.body;

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    update.password = hash;
    const updateAdmin = await adminModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res.status(200).json({ data: updateAdmin });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

//Delete an admin
export async function deleteAdmin(req, res, next) {
  try {
    const removeAdmin = await adminModel.findOneAndDelete({
        userName: req.params.USERNAME,
    });
    res
      .status(200)
      .json({ data: removeAdmin, message: "This admin has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

const controller = { addAdmin, getAll, deleteAdmin, getByUsername, EditAdmin };
export default controller;
