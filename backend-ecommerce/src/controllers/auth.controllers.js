import { users } from "../models/users.js";
import { compare } from "../libs/Bcryptjs.js";
export const LoginUser = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const usuario = await users.findOne({
      where: { email },
      attributes: ["email", "password_hash","username"],
    });
    // validar si el correo existe
    if (!usuario) {
      return res
        .status(404)
        .json({ message: "este email no se encuentra registrado" });
    }
    // validar si la contraseña esta correcta
    const isPasswordValid = await compare(contraseña, usuario.password_hash);
    const username = usuario.username 
    if (isPasswordValid) {
      return res
        .status(200)
        .json({ message: "Inicio de sesion correctamente",username });
    } else {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    res.status(500).json({ message: "ocurrio un error", error: error.message });
  }
};
