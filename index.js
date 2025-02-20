const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/")));

// sendFile will go here
app.get("/", function (req, res) {
  // res.setHeader("content-type", "text/html");
  // res.setHeader("content-encoding", "br");

  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
