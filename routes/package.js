import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();
import packageControllers from "../controllers/package.js"
/*router.get("/", packageControllers.getAllPackages);
router.get("/:ID", packageControllers.getPackageById);
router.post("/add",auth(["superAdmin", "admin"]), packageControllers.addPackage);
router.patch("/:ID",auth(["superAdmin", "admin"]), packageControllers.updatePackageById);
router.delete("/:ID",auth(["superAdmin", "admin"]), packageControllers.deletePackage);*/
router.get("/", packageControllers.getAllPackages);
router.get("/:ID", packageControllers.getPackageById);
router.post("/add", packageControllers.addPackage);
router.patch("/:ID", packageControllers.updatePackageById);
router.delete("/:ID", packageControllers.deletePackage);
export default router;