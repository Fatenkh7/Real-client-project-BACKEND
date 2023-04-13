import Model from "../models/typeTravel.js";

//get all typeTravel
export async function getAllTypeTravel(req, res, next) {
  try {
    const response = await Model.find();
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

//get a typeTravel by id
async function getByIdTypeTravel(req, res, next) {
  let { id } = req.params;
  try {
    const response = await Model.findOne({ _id: id });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

//create a new typeTravel
//  post(req, res, next) {
//   let body = req.body;

//   let doc = new Model(body);
//   doc
//     .save()
//     .then((response) => {
//       console.log(response);
//       res.status(200).send({ success: true, response });
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }

export const postTypeTravel = async (req, res) => {
  try {
    console.log(req.body, "jdhfbhjf")
    let doc = new Model(req.body);
    let response = await doc.save();
    // console.log(response);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//update a typeTravel
// async put(req, res) {
//   let { id } = req.params;
//   let body = req.body;
//   Model.findOneAndUpdate({ _id: id }, { $set: body })
//     .then((response) => {
//       console.log(response);
//       res.status(200).send({ success: true, response });
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }

async function putTypeTravel(req, res) {
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

//delete a typeTravel
//    delete(req, res) {
//     let { id } = req.params;
//     Model.findOneAndDelete({ _id: id })
//       .then((response) => {
//         console.log(response);
//         res.status(200).send({ success: true, response });
//       })
//       .catch((error) => {
//         res.status(500).send(error);
//       });
//   }
// }

export async function deleteTypeTravel(req, res) {
  let { id } = req.params;

  try {
    let response = await Model.findOneAndDelete({ _id: id });
    console.log(response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(500).send(error);
  }
}

const Controllers = { getAllTypeTravel, deleteTypeTravel, putTypeTravel, postTypeTravel, getByIdTypeTravel };
export default Controllers;
