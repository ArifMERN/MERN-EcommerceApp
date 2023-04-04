import express from "express";
import productRouters from "./router/productRoute.js";
import userRoute from "./router/userRoute.js";
import reviewRoute from "./router/reviewRoute.js";
import orderRoute from "./router/order.route.js";
import dotenv from "dotenv";
import dbConfig from "./config/dbConfig.js";
import cookieParser from "cookie-parser";
import auth from "./router/auth.routes.js";
import cors from "cors";
dotenv.config({ path: "config/config.env" });
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options(
  "*",
  cors({
    credentials: true,
    origin: true,
  })
);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRouters);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/auth", auth);
app.use("/api/v1/order", orderRoute);
app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(4500, () => {
  console.log("server is running on 4500");
  dbConfig();
});
