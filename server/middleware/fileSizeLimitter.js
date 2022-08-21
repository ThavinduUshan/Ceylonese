const MB = 5;
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimitter = (req, res, next) => {
  const files = req.files;
  let filesOverLimit = [];

  for (let i = 0; i < files.length; i++) {
    if (files.item(i).size > FILE_SIZE_LIMIT) {
      filesOverLimit.push(files.item(i).name);
    }
  }

  if (filesOverLimit.length) {
    const properVerb = filesOverLimit.length > 1 ? "are" : "is";

    const errorMessage =
      `Upload Failed. ${filesOverLimit.toString()} ${properVerb} over the file size Limit of ${MB} MB`.replaceAll(
        ",",
        ", "
      );

    const finalErrorMessage =
      filesOverLimit.length < 3
        ? errorMessage.replace(", ", " and")
        : errorMessage.replace(/,(?=[^,]*$)/, " and");

    return res.status(413).json({ error: finalErrorMessage });
  }

  next();
};

module.exports = fileSizeLimitter;
