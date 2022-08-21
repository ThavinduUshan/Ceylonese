const sysModel = require("../model/sysModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginSysUsers = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email Can't Be empty" });
  }

  if (!password) {
    return res.status(400).json({ error: "Password can't be empty" });
  }

  try {
    await sysModel.isUserExists(email, res).then((user) => {
      const sysUser = {
        id: user.id,
        isAdmin: user.isAdmin,
        email: user.email,
      };

      const hashedPassword = user.password;

      if (sysUser.isAdmin) {
        try {
          bcrypt.compare(password, hashedPassword).then((match) => {
            if (match) {
              const accessToken = jwt.sign(
                {
                  id: sysUser.id,
                  email: sysUser.email,
                  roles: 2436,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                  expiresIn: "30s",
                }
              );

              const refreshToken = jwt.sign(
                {
                  id: sysUser.id,
                  email: sysUser.email,
                },
                process.env.REFRESH_TOKEN_SECRET,
                {
                  expiresIn: "1d",
                }
              );

              //for testing
              res.json({
                user: sysUser,
                roles: 2436,
                success: "user has been successfuly logged in",
                accessToken: accessToken,
              });
            } else {
              return res
                .status(409)
                .json({ error: "email or password is incorrect" });
            }
          });
        } catch (err) {
          return res.status(500).json({ error: err });
        }
      } else {
        try {
          bcrypt.compare(password, hashedPassword).then((match) => {
            if (match) {
              const accessToken = jwt.sign(
                {
                  id: sysUser.id,
                  email: sysUser.email,
                  roles: 9871,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                  expiresIn: "30s",
                }
              );

              const refreshToken = jwt.sign(
                {
                  id: sysUser.id,
                  email: sysUser.email,
                },
                process.env.REFRESH_TOKEN_SECRET,
                {
                  expiresIn: "1d",
                }
              );

              //for testing
              res.json({
                user: sysUser,
                roles: 9871,
                success: "user has been successfuly logged in",
                accessToken: accessToken,
              });
            } else {
              return res
                .status(409)
                .json({ error: "email or password is incorrect" });
            }
          });
        } catch (err) {
          return res.status(500).json({ error: err });
        }
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = { loginSysUsers };
