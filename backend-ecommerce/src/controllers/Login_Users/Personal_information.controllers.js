import { Personal_information } from "../../models/Usuarios/Personal_information.js";
import { ValidUpdatePersonal } from "../../schemas/login_register/UpdatePersonal_Information.js";

export const UpdatePersonalInformation = async (req, res) => {
    try {
        const { id } = req.params
        const result = await ValidUpdatePersonal(req.body)
        if (result.error) {
            res.status(404).json({ error: JSON.parse(result.error.message) })
        }
        const NewUpdate = Personal_information.update({
            ...result.data
        }, {
            where: { user_id: id }
        })
        res.status(200).json({ message: 'Se Actualizaron los datos', User: id })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
} 