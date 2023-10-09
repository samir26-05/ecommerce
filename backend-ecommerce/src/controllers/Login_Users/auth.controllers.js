import { User } from "../../models/Usuarios/User.js";
import { compare, encryptPassword } from "../../libs/Bcryptjs.js";
export const TokenAccess = (req, res) => {
  const Username = req.Username;
  const rol = req.rol;
  const id = req.UserId;
  res.json({ id, Username, rol });
};

export const UpdatePassword = async (req, res) => {
  try {
    const { UserId } = req;
    const { password, newpassword } = req.body;
    const validPassword = password.trim()
    const validNewPassword = newpassword.trim()
    if(validPassword.length < 1 || validPassword === ""){
      return res.status(404).send("Invalid password")
    }
    if(validNewPassword.length < 1 || validNewPassword === ""){
      return res.status(404).send("Invalid new password")
    }
    const result = await User.findOne({ where: { user_id: UserId } });
    const PasswordSuccess = await compare(validPassword, result.password);
    if (!PasswordSuccess) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const encrypt = await encryptPassword(validNewPassword);
    result.password = encrypt;
    result.save();
    res.status(200).json({ message: "la Contraseña se cambio correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
