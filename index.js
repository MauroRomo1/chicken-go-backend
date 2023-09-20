import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import userRouter from "./src/routes/users.routes.js";

// 1- Configuraciones iniciales
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(`Estoy en el puerto ${app.get("port")}`);
});

// 2- Middlewares (Son funciones que hacen cosas especificas)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// 3- Crear las rutas
// http://localhost:4000/api/usuario
app.use("/api", userRouter);
