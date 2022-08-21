const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const corsOptions = require("./config/cors");
const path = require("path");

//apply middleware
// app.use(cors(corsOptions));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

//routes

app.use("/upload", require("./routes/upload"));
app.use("/buyers", require("./routes/buyers"));
app.use("/sellers", require("./routes/sellers"));
app.use("/sys", require("./routes/sys"));
app.use("/moderators", require("./routes/moderators"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
