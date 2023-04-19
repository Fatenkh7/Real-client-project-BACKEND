import adminModel from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
/**
 * @description get all admins
 * @param {object} req
 */
export async function getAll(req, res, next) {
  try {
    const response = await adminModel.find({});
    return res.status(200).send({ success: true, response });
  } catch (err) {
    return next(err);
  }
}

/**
 * @description get admin by id
 * @param {object} req
 */
export async function getById(req, res, next) {
  try {
    const { ID } = req.params;
    const admin = await adminModel.findById(ID);
    if (!admin) {
      return res
        .status(404)
        .send({ success: false, message: "Admin not found" });
    }
    res.status(200).send({ success: true, admin });
  } catch (error) {
    next(error);
  }
}
/**
 * @description add a new admin
 * @param {object} req
 */
export async function addAdmin(req, res, next) {
  try {
    const { firstName, lastName, userName, email, password, isSuper } =
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
/**
 * @description update admin by id
 * @param {object} req
 */
export async function editAdminById(req, res) {
  try {
    let filter = { _id: req.params.ID };
    let update = req.body;

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    update.password = hash;
    const updateAdmin = await adminModel.findOneAndUpdate(filter, update, {
      //for save it in the database
      new: true,
    });
    res.status(200).json({ message: "Update successfully", data: updateAdmin });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}
/**
 * @description delete admin by id
 * @param {object} req
 */
export async function deleteAdminById(req, res, next) {
  try {
    const removeAdmin = await adminModel.findOneAndDelete({
      _id: req.params.ID,
    });
    res
      .status(200)
      .json({ data: removeAdmin, message: "This admin has been deleted" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
}

export const login = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  try {
    const loggingUser = await adminModel.findOne({ userName: userName });
    if (!loggingUser) {
      return res.status(400).send("Invalid username");
    }
    const exist = await bcrypt.compare(password, loggingUser.password);
    if (!exist) {
      return res.status(400).send("Invalid password");
    }
    const token = jwt.sign(
      { user_id: loggingUser.id, userName },
      process.env.JWT_SECRET,
      { expiresIn: '4h'}
    );
    res.status(200).send({success:true, data:token, role:"user"});
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const controller = { addAdmin, getAll, deleteAdminById, getById, editAdminById, login };
export default controller;
