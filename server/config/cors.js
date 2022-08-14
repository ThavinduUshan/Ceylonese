const authorizedOrigins = ["http://127.0.0.1:3000", "http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (authorizedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
