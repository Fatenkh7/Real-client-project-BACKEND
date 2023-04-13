import express from 'express';
const router = express.Router();
import packageControllers from "../controllers/package.js"
router.get("/", packageControllers.getAllPackages);
router.get("/:id", packageControllers.getPackageById);
router.post("/", packageControllers.addPackage);
router.patch("/:id", packageControllers.updatePackageById);
router.delete("/:id", packageControllers.deletePackage);

export default router;