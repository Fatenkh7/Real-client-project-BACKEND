import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
/**
 * @description user sign up
 * @param req.body JSON
 */
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      isMember,
      email,
      phone,
      title,
      passportId,
      preferredAirlines,
      preferredDestinations,
    } = req.body;
    let newUser;
    if(req.body.password){
      let hashed = await bcrypt.hashSync(req.body.password,10);
       newUser = new user({
        firstName,
        lastName,
        email,
        isMember,
        phone,
        title,
        password:hashed,
        passportId,
        preferredAirlines,
        preferredDestinations,
      });
    } else{
      newUser = new user({
        firstName,
        lastName,
        email,
        isMember,
        phone,
        title,
        passportId,
        preferredAirlines,
        preferredDestinations,
      });
    }
    await newUser.save();
    res.status(201).send({ success: true, message: "User added successfully" });
  } catch (error) {
    console.log(error)
    res.status(410).send({
      error: true,
      message: "There is a problem with Saving the data",
      data: error,
    });
  }
};

/**
 * @description update user information sign up
 * @param req.params.id objectId
 */
const updateUserById = async (req, res) => {
  try {
    let updatedUser = await user.updateOne(
      { _id: req.params.ID },
      { $set: req.body },
      {
        runValidators: true,
      }
    );
    res.status(200).send({success:true,message:"user data updated"})
  } catch (error) {
    res
      .status(412)
      .send({ error: true, message: "There was a problem updating the data", data:error });
  }
};

/**
 * @description delete user
 * @param req.params.id objectId
 */
const deleteUserById = async (req, res) => {
  try {
    await user.findByIdAndDelete({ _id: req.params.ID })
    .then(function(response){res
      .status(200)
      .send({ success: true, message: "User deleted successfully" });}, function(reject){
        res.status(412).send({
          error: true,
          message: "There was a problem deleting this user",
          data:reject
        });
      })

  } catch (error) {
    res
      .status(412)
      .send({ error: true, message: "There was a problem delete the user", data:error });
  }
};

/**
 * @description get all users
 * @param {object} req
 * @return {object}
 */
const getAllUser = async (req, res) => {
  try {
    await user.find({}).then(
      function (response) {
        res
          .status(200)
          .send({
            success: true,
            message: "Users data retrieved Successfully",
            data: response,
          });
      },
      function (reject) {
        res
          .status(412)
          .send({
            error: true,
            message: "There was a problem getting the users data",
            data: reject,
          });
      }
    );
  } catch (error) {
    res
      .status(412)
      .send({
        error: true,
        message: "There was a problem getting the users data",
        data: error,
      });
  }
};
/**
 * @description get one user by id
 * @param {object} req 
 * @param {string} req.params.idPartnerType
 */
const getUserByParam = async (req, res) => {
  try {
    user.find({_id: req.params.ID})
    .then(
      function (response) {
        res
          .status(200)
          .send({
            success: true,
            message: "User data retrieved Successfully",
            data: response,
          });
      },
      function (reject) {
        res
          .status(412)
          .send({
            error: true,
            message: "There was a problem getting the user data",
            data: reject,
          });
      }
    );
  } catch (error) {
    res
      .status(412)
      .send({
        error: true,
        message: "There was a problem getting the users data",
      });
  }
};
const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const loggingUser = await user.findOne({ email: email });
    if (!loggingUser) {
      return res.status(400).send("Invalid username");
    }
    const exist = await bcrypt.compare(password, loggingUser.password);
    if (!exist) {
      return res.status(400).send("Invalid password");
    }
    const token = jwt.sign(
      { user_id: loggingUser.id, email },
      process.env.JWT_SECRET,
      { expiresIn: '4h'}
    );
    res.status(200).send({success:true, data:token});
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};
export default {
  createUser,
  updateUserById,
  deleteUserById,
  getAllUser,
  getUserByParam,
  login,
};
