import express from 'express';
const router = express.Router();
import packageControllers from "../controllers/package.js"
router.get("/",auth(["superAdmin", "admin"]), packageControllers.getAllPackages);
router.get("/:ID",auth(["superAdmin", "admin"]), packageControllers.getPackageById);
router.post("/add",auth(["superAdmin", "admin"]), packageControllers.addPackage);
router.patch("/:ID",auth(["superAdmin", "admin"]), packageControllers.updatePackageById);
router.delete("/:ID",auth(["superAdmin", "admin"]), packageControllers.deletePackage);
export default router;