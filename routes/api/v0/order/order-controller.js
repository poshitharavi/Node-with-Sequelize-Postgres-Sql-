import to from "await-to-js";
import { unlinkSync } from "fs";

export const addOrderController = async (req, res) => {
  if (req.file) {
    const { filename, path, mimetype } = req.file;
    switch (mimetype) {
      case "text/csv":
        res.json({
          filename: filename,
          filepath: path,
          type: mimetype,
        });
        break;
      default:
        unlinkSync(path); //delete the file if not relevent
        res.status(400).json({
          status: 2,
          error:
            "Uploaded file is not in required file format, Please upload .csv file only",
        });
    }
  } else {
    return res.status(404).json({
      status: 2,
      error: "No file is uploaded",
    });
  }
};
