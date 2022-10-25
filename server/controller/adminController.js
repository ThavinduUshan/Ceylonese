const bcrypt = require("bcrypt");
const adminModel = require("../model/adminModel");

const createMod = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({ error: "Email is required!" });
  }

  if (!password) {
    return res.json({ error: "Password is required!" });
  }

  try {
    await adminModel.isModeratorExists(email, res).then(() => {
      bcrypt.hash(password, 10).then((hash) => {
        const data = {
          email: email,
          password: hash,
        };
        adminModel.createModerator(data, res);
      });
    });
  } catch (err) {
    res.json({ error: err });
  }
};

const getModerators = async (req, res) => {
  try {
    await adminModel.getModerators().then((response) => {
      const moderators = response;

      res.json({
        moderators: moderators,
      });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getIssuesData = async (req, res) => {
  const { from, to } = req.body;

  if (!to) {
    return res.json({ error: "To Date Can't be empty" });
  }

  if (!from) {
    return res.json({ error: "From Date Can't be empty" });
  }

  try {
    await adminModel.getIssuesData(from, to, res).then((results) => {
      const records = results;
      res.json({ records: records });
    });
  } catch (error) {
    return res.json({ error: err });
  }
};

module.exports = { createMod, getModerators, getIssuesData };
