const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require('./config/keys').mongoURI;
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");


const scores = require("./routes/api/scores");
const bodyParser = require('body-parser');


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.static("public"));

app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/index.html"));
});

app.use("/api/scores", scores);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(__dirname);
});
