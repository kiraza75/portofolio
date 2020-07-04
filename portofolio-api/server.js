const express = require("express");
const lib = require("./library");
const cors = require("cors");


const app = express();
app.use(cors());

app.post("/", (request, response) => {
   console.log("caca")
});

app.listen(8000, function() {
   console.log("server is running on 8000");
});