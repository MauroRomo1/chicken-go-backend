import generateJWT from "../helpers/token-sign.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Correo o password incorrecto - correo",
      });
    }

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) {
      return res.status(400).json({
        message: "Correo o password incorrecto - password",
      });
    }

    const token = await generateJWT(
      user._id,
      user.name,
      user.lastname,
      user.rol,
      user.state
    );

    res.status(200).json({
      message: "El usuario existe",
      uid: user._id,
      name: user.name,
      lastname: user.lastname,
      rol: user.rol,
      state: user.state,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Usuario o contraseña invalido",
    });
  }
};

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
      message: "Usuario creado con exito.",
      name: user.name,
      lastname: user.lastname,
      uid: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El usuario no pudo ser creado",
    });
  }
};
