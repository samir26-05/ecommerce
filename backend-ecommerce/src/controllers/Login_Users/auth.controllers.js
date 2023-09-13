export const  TokenAccess = (req,res) =>{
    const Username = req.Username
    const rol = req.rol
    const id = req.UserId
    res.json({id,Username,rol})
}