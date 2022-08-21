const path = require("path");

const fileExtLimitter = (allowedExtArray) => {
  return (req, res, next) => {
    const files = req.files;
    const fileExtensions = [];

    for (let i = 0; i < files.length; i++) {
      fileExtensions.push(path.extname(files.item(i).name));
    }

    const allowed = fileExtensions.every((ext) =>
      allowedExtArray.includes(ext)
    );

    if (!allowed) {
      const errorMessage =
        `Upload Failed. Only ${allowedExtArray.toString()} files allowed.`.replaceAll(
          ",",
          ", "
        );

      return res.status(422).json({ error: errorMessage });
    }

    next();
  };
};

module.exports = fileExtLimitter;
