import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import models from "./models/index.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

// app.use('Access-Control-Allow-Origin','http://localhost:3000/');
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "http://localhost:3000/");
  next();
});






app.use(models);

app.all("/*", (req, res, next) => {
  res.status(500).json({
    message: req.url + " is not found",
  });
});

app.use(errorMiddleware);
app.listen(9090, console.log(9090));
