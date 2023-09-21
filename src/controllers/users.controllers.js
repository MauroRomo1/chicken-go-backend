import User from "../models/usuario.js";
import bcrypt from "bcrypt";

export const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al buscar los usuarios",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Ya existe un usuario con el correo enviado",
      });
    }
    user = new User(req.body);
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    res.status(201).json({
      message: "Usuario creado",
      nickname: user.nickname,
      uid: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El usuario no pudo ser creado",
    });
  }
};
