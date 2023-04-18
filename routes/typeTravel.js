import express from "express";
import Controllers from "../controllers/typeTravel.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/", auth(["superAdmin", "admin"]), Controllers.getAllTypeTravel);
router.get(
  "/:ID",
  auth(["superAdmin", "admin"]),
  Controllers.getByIdTypeTravel
);
router.post("/add", auth(["superAdmin", "admin"]), Controllers.postTypeTravel);
router.put("/:ID", auth(["superAdmin", "admin"]), Controllers.putTypeTravel);
router.delete(
  "/:ID",
  auth(["superAdmin", "admin"]),
  Controllers.deleteTypeTravel
);
export default router;
