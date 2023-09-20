import express from "express";

// 1- Configuraciones iniciales
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(`Estoy en el puerto ${app.get("port")}`);
});
// 2- Middlewares (Son funciones que hacen cosas especificas)

// 3- Crear las rutas
