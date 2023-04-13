import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import createError from "http-errors"
import cookieParser from "cookie-parser";
import typeTravelRoutes from "./routes/typeTravel.js";
import bodyParser from "body-parser"

dotenv.config;
const PORT = process.env.PORT;
await connectDB();
const app = new express();
app.use(express.json());
app.use(bodyParser.urlencoded())
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/typeTravel", typeTravelRoutes);



// create and error object,catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});
app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);
