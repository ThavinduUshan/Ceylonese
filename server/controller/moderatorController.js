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
      let details = response;
      console.log(details);
      moderatorModel.getVerificationDocs(requestID, res).then((response) => {
        const docs = [];
        for (let i = 0; i < response.length; i++) {
          docs.push(response[i].docName);
        }
        console.log(docs);

        details = {
          ...details,
          verificationDocs: docs,
        };
        console.log(details);
        res.json({
          request: details,
        });
      });
    });
  } catch {}
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
    verificationDocs,
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
            verificationDocs: verificationDocs,
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

module.exports = {
  getSellerRequests,
  getRequestDetails,
  acceptSeller,
  rejectSeller,
};
