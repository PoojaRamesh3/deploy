const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(4000, () => {
  console.log("server is running!");
});
app.use(
  cors({
    origin: "*",
  })
);

app.use("/pooja", (req, res) => {
  return res.status(200).json({
    message: "Sample node js api, Its working!",
  });
});

module.exports = app;
