import { users,Validusers } from "../models/users.js";
import { encryptPassword } from "../libs/Bcryptjs.js";

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
    // validar primero si todos los datos estan bien
    const result = await Validusers(req.body)
    console.log(result)
    if(result.error){
      return res.status(400).json({error: JSON.parse(result.error.message)});
      
    }
    const Encryptada = await encryptPassword(req.body.password_hash) 
    const NewUsers = await users.create({
      ...result.data,
      password_hash: Encryptada
    });
    res.status(200).json({ message: "Usuario creado exitosamente", NewUsers });
  } catch (error) {
    console.error('Error en la creación de usuario:', error);
    res.status(500).send({ message: "ocurrio un error", error:error.message });
  }
};
