export const  TokenAccess = (req,res) =>{
    const Username = req.Username
    const rol = req.rol
    res.json({Username,rol})
}