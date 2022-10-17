const chatModel = require("../model/chatModel");

const getRoomsByBuyer = async (req, res) => {
  const { buyerID } = req.body;
  console.log("here");

  try {
    await chatModel.getRoomsByBuyer(buyerID, res).then((results) => {
      const rooms = results;
      console.log(rooms);
      res.json({ rooms: rooms });
    });
  } catch (error) {
    return res.json({ error: error });
  }
};

module.exports = {
    getRoomsByBuyer,
}