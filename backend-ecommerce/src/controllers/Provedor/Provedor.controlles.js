import { Provedor } from "../../models/Provedores/Provedor.js";
import { ValidRegisterProvedor } from "../../schemas/Provedores/CreateValidSupplier.js";
import { ValidUpdateProvedor } from "../../schemas/Provedores/UpdateValidSupplier.js";
export const GetProvedor = async (req, res) => {
    try {
    const Proveedores = await Provedor.findAll()
    if(!Proveedores){
        return res.status(404).json({message: "No Se encontro ningun proveedor"})
    }
    res.status(200).json(Proveedores)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const CreateProvedor = async (req,res) => {
    try {
    const result = await ValidRegisterProvedor(req.body)

    if(result.error){
        return res
        .status(400)
        .json({ error: JSON.parse(result.error.message) });
    }
    const NewProduct = await Provedor.create({
        ...result.data
    })
    res.status(200).json({message: 'Proveedor creado con exito',NewProduct})
    } catch (error) {
        res.status(500).json({error: error.message}) 
    }
}

export const UpdateProvedor = async (req, res) => {
    try {
    const {id} = req.params
    const Result = await ValidUpdateProvedor(req.body)
    if(Result.error){
        return res
        .status(400)
        .json({ error: JSON.parse(Result.error.message) });
    }
    const NewUpdate = Provedor.update(
        {
          ...Result.data
        },
        {
          where: { id_supplier: id },
        }
        );
        res.status(200).json({message: 'Proveedor Actualizado con exito', id})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const DeleteProvedor = async (req, res) => {
    try {
    const { id } = req.params
    const ProvedorFound = await Provedor.findOne({where: {id_supplier: id}})
    if(!ProvedorFound){
        return res.status(404).json({message: 'No se encontro ningun proveedor'})
    }
    ProvedorFound.destroy()
    res.status(200).json({message: 'el Proveedor elimino correctamente', id})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}