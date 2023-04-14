import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    const extension = file.mimetype.split("/")[1];
    const filename = `${file.fieldname}-${Date.now()}.${extension}`;
    const filepath = path.join(filename);
    callback(null, filepath);
  },
});

const upload = multer({ storage });

export default function (req, res, next) {
  upload.single("image")(req, res, (err) => {
    try {
      if (err) {
        return res.status(400).send(err.message);
      }
      if (!req.file) {
        throw new Error("Please select a file to upload");
      }
      req.imagePath = req.file.path;
      next();
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  });
}
