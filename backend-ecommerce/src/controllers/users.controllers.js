import { users } from "../models/users.js";
import { encryptPassword } from "../libs/Bcryptjs.js";
import { isValidEmail } from "../libs/ValidGmail.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await users.findAll();
    res.json(usuarios);
  } catch (error) {
    res.send({ message: "ocurrio un error", error: error.message }).status(500);
  }
};
export const getUsuarioId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await users.findByPk(id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: "ocurrio un error", error: error.message });
  }
};
export const UserDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await users.destroy({ where: { user_id: id } });
    res
      .status(202)
      .json({ message: "Usuario eliminado con exito", usuario: usuario });
  } catch (error) {
    res.status(500).json({ message: "ocurrio un error", error: error.message });
  }
};
export const CrearUsuario = async (req, res) => {
  try {
    const {
      username,
      email,
      password_hash,
      first_name,
      last_name,
      address,
      phone_number,
      is_admin,
    } = req.body;
    // validar si ya se encuentra el usuario
    const usuario = await users.findOne({ where: { username } });
    if (usuario) {
      return res.status(404).json({ message: "ya existe el usuario" });
    }
    if(!isValidEmail(email)){
      return res.status(400).json({message: "correo invalido"})
    }
    // Validar si el correo electrónico ya está registrado
    const correo = await users.findOne({ where: { email } });
    if (correo) {
      return res.status(404).json({ message: "ya esta registrado el correo" });
    }
    // Validar si el número de teléfono ya está registrado
    const telefono = await users.findOne({
      where: { phone_number },
      attributes: ["phone_number"],
    });
    if (telefono) {
      return res
        .status(404)
        .json({ message: "ya se encuenta registrado este telefono" });
    }
    // Validar si el número de teléfono tiene 10 dígitos
    if (!/^\d{10}$/.test(phone_number)) {
      return res
        .status(400)
        .json({ message: "El número de teléfono debe tener 10 dígitos" });
    }
    const NewUsers = await users.create({
      username,
      email: email.toLowerCase(),
      password_hash: await encryptPassword(password_hash),
      first_name,
      last_name,
      address,
      phone_number,
    });
    res.status(200).json({ message: "Usuario creado exitosamente", NewUsers });
  } catch (error) {
    res.send({ message: "ocurrio un erro", error: error.message });
  }
};
