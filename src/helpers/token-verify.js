import jwt from "jsonwebtoken";
import "dotenv/config";
//esto es un middleware personalizado

const verifyJWT = (req, res, next) => {
  //recibir el token
  const token = req.header("x-token");
  if (!token) {
    //401 error en la autenticacion
    return res.status(401).json({
      message: "No hay token en la peticion",
    });
  }
  // si el token existe
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.id = payload.uid;
    req.name = payload.name;
    req.lastname = payload.lastname;
    req.rol = payload.rol;
    req.state = payload.state;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "El token no es valido o token vencido ",
    });
  }

  next();
};

export default verifyJWT;
