import { User } from "../../models/Usuarios/User.js";
import { Roles } from "../../models/Usuarios/Roles.js";
import { Personal_information } from "../../models/Usuarios/Personal_information.js";
import { ValidRegister } from "../../schemas/login_register/RegisterUser.js";
import { encryptPassword, compare } from "../../libs/Bcryptjs.js";
import { sequelize } from "../../database.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
import { AvatarUser, avatarfile } from "../../libs/constas.js";
import fs from "fs";
import path from "path";
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
      .json({ message: "Usuario creado con exito", Usuario: NewUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const UserFound = await User.findOne({ where: { user_id: id } });
    if (!UserFound) {
      return res.status(404).json({ message: "No se encontro ningun usuario" });
    }
    UserFound.destroy();
    res.status(200).json({ message: "Usuario eliminado Exitosamente" });
  } catch (error) {
    res.status(404).json({ error: error.message });
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
    const rol = await Roles.findOne({
      where: { role_id: Existemail.role_id },
    });
    const accessToken = jwt.sign(
      { id: Existemail.user_id, username: Existemail.user, role: rol.rol },
      SECRET,
      {
        expiresIn: "7h",
      }
    );
    return res.status(200).json(accessToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetUsers = async (req, res) => {
  try {
    const result = await User.findAll({
      where: { role_id: 2 },
      attributes: ["user_id", "user", "email", "avatar"],
      include: [
        {
          model: sequelize.model("Personal_information"),
          attributes: [
            "nombre",
            "apellido",
            "Phone_number",
            "address",
            "city",
            "country",
            "postalcode",
            "state",
          ],
        },
      ],
    });
    if (!result) {
      return res.status(404).json({ message: "No se encontro ningun usuario" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const GetUsersName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await User.findOne({
      where: { user: name },
      attributes: ["user_id", "user", "email", "avatar"],
      include: [
        {
          model: sequelize.model("Personal_information"),
          attributes: [
            "nombre",
            "apellido",
            "Phone_number",
            "address",
            "city",
            "country",
            "postalcode",
            "state",
          ],
        },
      ],
    });
    if (!result) {
      return res
        .status(404)
        .json({ message: "Este usuario no se encuentra registrado" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const UpdateAvatar = async (req, res) => {
  try {
    const { UserId } = req;
    const { file } = req;
    const user = await User.findOne({ where: { user_id: UserId } });
    if (!user.avatar) {
      const ruta = encodeURI(AvatarUser + file.filename);
      user.avatar = ruta;
      user.save();
      return res
        .status(200)
        .json({ message: "Foto de perfil añadida con exito" });
    }
    if (user.avatar) {
      const File = user.avatar.split("/").slice(3);
      fs.unlinkSync(path.join(avatarfile, File[3]));
      const ruta = encodeURI(AvatarUser + file.filename);
      user.avatar = ruta;
      user.save();
      return res
        .status(200)
        .json({ message: "Foto de perfil actualizada con exito" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
