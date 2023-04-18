import express from 'express';
const router = express.Router();
import packageControllers from "../controllers/package.js"
router.get("/", packageControllers.getAllPackages);
router.get("/:ID", packageControllers.getPackageById);
router.post("/add", packageControllers.addPackage);
router.patch("/:ID", packageControllers.updatePackageById);
router.delete("/:ID", packageControllers.deletePackage);
export default router;