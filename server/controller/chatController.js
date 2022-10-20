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

const getChatsByRoomID = async (req, res) => {
    const roomID = req.params.id;
    console.log(roomID);
    try {
      await chatModel.getChatsByRoomID(roomID, res).then((results) => {
        const messages = results;
        console.log(results);
        res.json({ messages: messages });
      });
    } catch (error) {
      return res.json({ error: err });
    }
  };
  
  const addMessage = (req, res) => {
    const { roomID, message, sentBy, sentDate, sentTime } = req.body;
    chatModel.addMessage(roomID, message, sentBy, sentDate, sentTime, res);
  };

  const getRoomsBySeller = async (req, res) => {
    const { sellerID } = req.body;
    console.log("here");
  
    try {
      await chatModel.getRoomsBySeller(sellerID, res).then((results) => {
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
    addMessage,
    getChatsByRoomID,
    getRoomsBySeller,
}