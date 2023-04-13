import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import typeTravelRoutes from "./routes/typeTravel.js";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import partnerTypeRoutes from "./routes/partnerType.js";
import partnerRoutes from "./routes/partner.js";
import userRoutes from "./routes/user.js";
import packageRoutes from "./routes/package.js";
import bookingRoutes from "./routes/booking.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/typeTravel", typeTravelRoutes);
app.use("/admin", adminRoutes);
app.use("/partnertype", partnerTypeRoutes);
app.use("/partner", partnerRoutes);
app.use("/user", userRoutes);
app.use("/package", packageRoutes);
app.use("/booking", bookingRoutes);

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

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`
      );
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
