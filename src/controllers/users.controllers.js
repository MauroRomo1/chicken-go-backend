import User from "../models/usuario.js";

export const listUsers = (req, res) => {

  try {
    // Ir a la BD y pedir los usuarios
    res.send("Esto es una prueba de listar usuarios");
  } catch (error) {
    console.log(error);
  }

};
