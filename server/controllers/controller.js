const axios = require("axios");


module.exports = {
  get: (req, res) => {
    axios.get("https://cat-fact.herokuapp.com/facts/").then(response => {
      // console.log(response.data);
      res.status(200).json(response.data);
    }).catch(err => console.log(err));
  }
}