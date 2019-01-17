const express = require('express');
const app = express();
const {json} = require("body-parser");
const cors = require("cors");
const { get } = require("./controllers/controller.js")
const port = 3001;

app.use(json());
app.use(cors());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/facts', get);


app.listen(port, () => console.log(`Server is running on port ${port}`));