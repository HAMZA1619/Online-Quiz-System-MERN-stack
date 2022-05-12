const express = require("express");
const { authRouter } = require("./routes");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(cookieParser());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_DB);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

app.listen(process.env.PORT, () =>
  console.log(`server running in ${process.env.PORT} `)
);
