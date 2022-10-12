const db = require("../config/database");

const getSellerRequests = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT * FROM seller_requests WHERE status=? ORDER BY requestID DESC";
        connection.query(sql, ["Pending"], (error, results) => {
          connection.release();
          if (error) {
            return res.status(500).json({ error: "Internal Server Error" });
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

const getRequestDetails = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql =
          "SELECT seller_requests.*, seller_requests_docs.frontDocName, seller_requests_docs.backDocName FROM seller_requests INNER JOIN seller_requests_docs ON seller_requests.requestID = seller_requests_docs.requestID WHERE seller_requests.requestID=?";
        connection.query(sql, [requestID], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

// const getVerificationDocs = (requestID, res) => {
//   return new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) {
//         return res.status(500).json({ error: "Internal Server Error!" });
//       } else {
//         const sql =
//           "SELECT docName FROM seller_requests_docs WHERE requestID=?";
//         connection.query(sql, [requestID], (error, results) => {
//           connection.release();
//           if (error) {
//             reject();
//           } else {
//             resolve(results);
//           }
//         });
//       }
//     });
//   });
// };

const requestAccepted = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql = "UPDATE seller_requests SET status=? WHERE requestID=?";
        connection.query(sql, ["Accepted", requestID], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const createSeller = (data, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const {
          email,
          password,
          ownersName,
          ownersContactNo,
          ownersAddress,
          verificationNo,
        } = data;
        const sql =
          "INSERT INTO sellers (email, password, ownersName, ownersContactNo, ownersAddress, verificationNo) VALUES (?, ?, ?, ?, ?, ?)";
        connection.query(
          sql,
          [
            email,
            password,
            ownersName,
            ownersContactNo,
            ownersAddress,
            verificationNo,
          ],
          (err, results) => {
            connection.release();
            if (err) {
              return res.status(500).json({ error: "Internal Server Error" });
            } else {
              db.getConnection((err, connection) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ error: "Internal Server Error" });
                } else {
                  const sql = "SELECT sellerID FROM sellers WHERE email=?";
                  connection.query(sql, [email], (err, results) => {
                    connection.release();
                    if (err) {
                      reject();
                    } else {
                      resolve(results[0]);
                    }
                  });
                }
              });
            }
          }
        );
      }
    });
  });
};

const createStore = (data, res) => {
  const { sellerID, storeName } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql = "INSERT INTO stores (sellerID, storeName) VALUES (?, ?)";

        connection.query(sql, [sellerID, storeName], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const addVerificationDocs = (data, res) => {
  const { sellerID, frontDocName, backDocName } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql =
          "INSERT INTO sellers_verification_docs (sellerID, frontDocName, backDocName) VALUES (?, ?, ?)";

        connection.query(
          sql,
          [sellerID, frontDocName, backDocName],
          (err, results) => {
            connection.release();

            if (err) {
              reject();
            } else {
              resolve();
            }
          }
        );
      }
    });
  });
};

const requestRejected = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql = "UPDATE seller_requests SET status=? WHERE requestID=?";
        connection.query(sql, ["Rejected", requestID], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const getSupportTicketIssues = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT * FROM support_tickets WHERE status !=? AND type != ? ORDER BY ticket_id DESC";
        connection.query(sql, ["Closed", 3], (error, results) => {
          connection.release();
          if (error) {
            return res.status(500).json({ error: "Internal Server Error" });
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

const getSupportTicketIssuesDetails = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql =
          "SELECT * FROM support_tickets WHERE ticket_id=? ORDER BY ticket_id DESC";
        connection.query(sql, [requestID], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

const openSupportTicket = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "UPDATE support_tickets SET status = ? WHERE ticket_id = ?";
        connection.query(sql, ["Opened", requestID], (error, results) => {
          if (error) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const closeSupportTicket = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "UPDATE support_tickets SET status = ? WHERE ticket_id = ?";
        connection.query(sql, ["Closed", requestID], (error, results) => {
          if (error) {
            reject();
          } else {
            console.log(results);
            console.log("ticket closed");
            resolve();
          }
        });
      }
    });
  });
};

const getSupportTicketComplains = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT * FROM support_tickets WHERE status !=? AND type = ? ORDER BY ticket_id DESC";
        connection.query(sql, ["Closed", 3], (error, results) => {
          connection.release();
          if (error) {
            return res.status(500).json({ error: "Internal Server Error" });
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

const getSupportTicketComplainDetails = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql =
          "SELECT * FROM support_tickets WHERE ticket_id=? ORDER BY ticket_id DESC";
        connection.query(sql, [requestID], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};



module.exports = {
  getSellerRequests,
  getRequestDetails,
  requestAccepted,
  createSeller,
  createStore,
  addVerificationDocs,
  requestRejected,
  getSupportTicketIssues,
  getSupportTicketIssuesDetails, 
  openSupportTicket, 
  closeSupportTicket,
  getSupportTicketComplains,
  getSupportTicketComplainDetails
};
