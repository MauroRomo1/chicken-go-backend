import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import userRouter from "./src/routes/users.routes.js";
import productRouter from "./src/routes/products.routes.js";
import "./src/database/database.js";

const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(`Estoy en el puerto ${app.get("port")}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", userRouter);
app.use("/api", productRouter);
