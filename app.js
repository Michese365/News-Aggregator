const express = require("express");
const ejs = require("ejs");
const https = require("https");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

const url = "https://www.lusakatimes.com/wp-json/wp/v2/posts";

const pagePosts = [];
app.get("/", (req, res) => {
  axios.get(url).then((response) => {
    const title = response.data;
    res.render("home", { title: title });
  });
});

app.post("/", (req, res) => {});

app.listen(3000, (req, res) => {
  console.log("Up and Running!");
});
