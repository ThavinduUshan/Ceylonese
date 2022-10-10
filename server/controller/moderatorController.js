const moderatorModel = require("../model/moderatorModel");

const getSellerRequests = async (req, res) => {
  try {
    await moderatorModel.getSellerRequests().then((response) => {
      const requests = response;
      console.log(requests);
      res.json({ requests: requests });
    });
  } catch (err) {
    console.log(err);
  }
};

const getRequestDetails = async (req, res) => {
  const requestID = req.params.id;
  try {
    await moderatorModel.getRequestDetails(requestID, res).then((response) => {
      const details = response;
      res.json({
        request: details,
      });
    });
  } catch (err) {
    res.json({ error: err });
  }
};

const acceptSeller = async (req, res) => {
  const {
    requestID,
    email,
    password,
    storeName,
    ownersName,
    ownersContactNo,
    ownersAddress,
    verificationNo,
    frontDocName,
    backDocName,
  } = req.body;

  try {
    await moderatorModel.requestAccepted(requestID, res).then(() => {
      data = {
        email: email,
        password: password,
        ownersName: ownersName,
        ownersContactNo: ownersContactNo,
        ownersAddress: ownersAddress,
        verificationNo: verificationNo,
      };

      moderatorModel.createSeller(data, res).then((seller) => {
        console.log(seller);
        const sellerID = seller.sellerID;

        data = {
          sellerID: sellerID,
          storeName: storeName,
        };

        moderatorModel.createStore(data, res).then(() => {
          data = {
            sellerID: sellerID,
            frontDocName: frontDocName,
            backDocName: backDocName,
          };

          moderatorModel.addVerificationDocs(data, res).then(() => {
            res.status(200).json({ success: "Seller Accepted!" });
          });
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const rejectSeller = async (req, res) => {
  const { requestID } = req.body;

  try {
    await moderatorModel.requestRejected(requestID, res).then(() => {
      res.status(200).json({ success: "Request Rejected!" });
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getSupportTicketIssues = async (req, res) => {
  try {
    await moderatorModel.getSupportTicketIssues().then((response) => {
      const requests = response;
      console.log(requests);
      res.json({ requests: requests });
    });
  } catch (err) {
    console.log(err);
  }
};


const getSupportTicketIssuesDetails = async (req, res) => {
  const requestID = req.params.id;
  try {
    await moderatorModel
      .getSupportTicketIssuesDetails(requestID, res)
      .then((response) => {
        const details = response;
        res.json({
          request: details,
        });
      });
  } catch (err) {
    res.json({ error: err });
  }
};

const openSupportTicket = async (req, res) => {
  const { requestID } = req.body;

  try {
    await moderatorModel.openSupportTicket(requestID, res).then(() => {
      res.json({ success: "Ticekt Successfully Opned!" });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};


module.exports = {
  getSellerRequests,
  getRequestDetails,
  acceptSeller,
  rejectSeller,
  getSupportTicketIssuesDetails,
  openSupportTicket
};
