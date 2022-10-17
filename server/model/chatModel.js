const db = require("../config/database");

const getRoomsByBuyer = (buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json("Internal Server Error");
      } else {
        const sql =
          "SELECT chats.*,chat_messages.message, chat_messages.sentDate, chat_messages.sentTime, sellers.OwnersName FROM chats INNER JOIN sellers ON chats.sellerID = sellers.sellerID INNER JOIN chat_messages ON chats.roomID = chat_messages.roomID WHERE chats.buyerID = ? GROUP BY chats.roomID ORDER BY chat_messages.sentTime DESC";
        connection.query(sql, [buyerID], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

module.exports ={
    getRoomsByBuyer,
}