const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Workssss...");
});

app.listen(3000, () => {
  console.log("🚀 Server Started.");
});
