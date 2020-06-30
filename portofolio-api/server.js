const express = require("express");
const lib = require("./library");
const cors = require("cors");

const app = express();
app.use(cors());

app.post("/", (request, response) => {

});

app.listen(8000, ()=> {
   console.log("server is running on 8000");
});