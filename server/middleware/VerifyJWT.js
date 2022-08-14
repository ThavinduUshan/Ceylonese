const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const auth = req.headers.authorization || req.headers.Authorization;
  console.log(auth);
  if (!auth?.startsWith("Bearer")) return res.status(401);

  const token = auth.split(" ");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    //get the decoded values from the token
    req.user = {
      id: decoded.id,
      username: decoded.username,
      roles: decoded.roles,
    };

    next();
  });
};

module.exports = verifyJWT;
