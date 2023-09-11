import { Personal_information } from "../../models/Usuarios/Personal_information.js";
import { ValidUpdatePersonal } from "../../schemas/login_register/UpdatePersonal_Information.js";
import { User } from "../../models/Usuarios/User.js";

export const UpdatePersonalInformation = async (req, res) => {
  try {
    const { name } = req.params;
    const UserFound = await User.findOne({where: {user: name}})
    if(!UserFound){
        return res.status(404).json({message: 'Usuario no encontrado'})
    }
    const result = await ValidUpdatePersonal(req.body);
    if (result.error) {
      return res.status(404).json({ error: JSON.parse(result.error.message) });
    }
    const NewUpdate = Personal_information.update(
      {
        ...result.data,
      },
      {
        where: { user_id: UserFound.user_id },
      }
    );
    return res.json({ message: "Se Actualizaron los datos", User: name });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
    
  }
};
