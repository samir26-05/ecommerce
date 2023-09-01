import { User } from "../../models/Usuarios/User.js";
import { Personal_information } from "../../models/Usuarios/Personal_information.js";
import { ValidRegister } from "../../schemas/login_register/RegisterUser.js";
import { encryptPassword, compare } from "../../libs/Bcryptjs.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
export const CreateUser = async (req, res) => {
  try {
    const result = await ValidRegister(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const Encrypt = await encryptPassword(req.body.password);
    const NewUsers = await User.create({
      user: result.data.user,
      email: result.data.email,
      password: Encrypt,
      role_id: result.data.role_id,
    });
    const personal = await Promise.all(
      [result.data].map(async (value) => {
        const { nombre, apellido } = value;
        const Personalinformat = await Personal_information.create({
          nombre: nombre,
          apellido: apellido,
          user_id: NewUsers.user_id,
        });
        return Personalinformat;
      })
    );
    res
      .status(200)
      .json({ message: "usuario creado con exito", Usuario: NewUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const Existemail = await User.findOne({
      where: { email },
    });
    if (!Existemail) {
      return res.status(404).json({ message: "Email no encontrado" });
    }

    const PasswordCorrect = await compare(password, Existemail.password);
    if (!PasswordCorrect) {
      return res
        .status(404)
        .json({ message: "Combinacion de email y constraseña incorrecta" });
    }
    const accessToken = jwt.sign({ id: Existemail.user_id }, SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json( accessToken );
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
