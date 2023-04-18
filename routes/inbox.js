import express from "express";
import Controllers from "../controllers/inbox.js";
const router = express.Router();
router.get("/", Controllers.getAllInbox);
router.get("/:ID", Controllers.getByIdInbox);
router.post("/add", Controllers.postInbox);
router.put("/:ID", Controllers.putInbox);
router.delete("/:ID", Controllers.deleteInbox);
export default router;
