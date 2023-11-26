import jwt from "jsonwebtoken";
import "dotenv/config";

const generateJWT = (uid, name, lastname, rol, state) => {
  return new Promise((resolve, reject) => {
    //agregar los datos al payload
    const payload = { uid, name, lastname, rol, state };
    //aqui firmamos el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: "6h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }
        //si esta todo correcto
        resolve(token);
      }
    );
  });
};

export default generateJWT;
