import express from "express";
import productRouters from "./router/productRoute.js";
import userRoute from "./router/userRoute.js";
import dotenv from "dotenv";
import dbConfig from "./config/dbConfig.js";
dotenv.config({ path: "config/config.env" });
const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/product", productRouters);

app.listen(4500, () => {
  console.log("server is running on 4500");
  dbConfig();
});
