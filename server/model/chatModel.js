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

const getChatsByRoomID = (roomID, res) => {
    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          return res.json({ error: "Internal Server Error" });
        } else {
          const sql = "SELECT * FROM chat_messages WHERE roomID = ?";
          connection.query(sql, [roomID], (error, results) => {
            connection.release();
  
            if (error) {
              reject();
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  };
  
  const addMessage = (roomID, message, sentBy, sentDate, sentTime, res) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Erro" });
      } else {
        const sql =
          "INSERT INTO chat_messages (roomID, message, sentBy, sentDate, sentTime) VALUES (?, ?, ?, ? ,?)";
        connection.query(
          sql,
          [roomID, message, sentBy, sentDate, sentTime],
          (err, results) => {
            if (err) {
              return res.json({ error: "Internal Server Error" });
            } else {
              res.json({ success: "success!" });
            }
          }
        );
      }
    });
  };

  const getRoomsBySeller = (sellerID, res) => {
    return new Promise((resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          return res.json("Internal Server Error");
        } else {
          const sql =
            "SELECT chats.*,chat_messages.message, chat_messages.sentDate, chat_messages.sentTime, buyers.username FROM chats INNER JOIN buyers ON chats.buyerID = buyers.id INNER JOIN chat_messages ON chats.roomID = chat_messages.roomID WHERE chats.sellerID = ? GROUP BY chats.roomID ORDER BY chat_messages.sentTime DESC";
          connection.query(sql, [sellerID], (err, results) => {
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
    getChatsByRoomID,
    addMessage,
    getRoomsBySeller,
}