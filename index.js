const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () =>
  console.log(`${process.env.APP_NAME} is litening on port ${process.env.PORT}`)
);
