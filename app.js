/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const CONSTANTS = require("constants");

//ADD BODY-PARSER CODE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set for cors.
const corsOrigin = [
  "http://localhost:5173",
  "http://localhost:5175",
  "http://localhost:30001",
];

app.use(
  // cors() // change for all routes allowed in. ie for production w unk routes for users.
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// also doable, use cors(corsOptions as sec paramater of express routes. )
// https://github.com/expressjs/cors?tab=readme-ov-file#configuring-cors
// var corsOptions = {
//   origin: "http://localhost:5173",
//   // origin: "*", // or this for everything
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// may be needed for preflight requests
// app.options("*", cors()); // include before other routes

//ADD EXPRESSS ROUTES
app.get("/image-upload", (req, res) => {
  console.log("GET request received to /image-upload.", req.body);
  res.send("GET request recieved on server to /image-upload.");
});

app.post("/image-upload", (req, res) => {
  console.log("POST request received to /image-upload.", req.body);
  res.send("POST request recieved on server to /image-upload.");
});

app.post("/test-point", (req, res) => {
  console.log("POST request received to /test-point.");
  res.send("POST You hit the test point: Congrats");
});

app.listen(CONSTANTS.PORT, process.env.IP, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
    console.log("Server is Successfully Running, ip is  " + process.env.IP);
  } else console.log("Error occurred, server can't start", error);
});
