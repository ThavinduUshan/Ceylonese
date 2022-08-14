const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const corsOptions = require("./config/cors");
const path = require("path");

//apply middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

//routes
app.use("/buyers", require("./routes/buyers"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
