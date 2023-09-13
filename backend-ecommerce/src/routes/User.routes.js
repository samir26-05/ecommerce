import { Router } from "express";
import * as User from "../controllers/Login_Users/Login_Register.controllers.js";
import * as Auth from "../controllers/Login_Users/auth.controllers.js";
import * as Personal from "../controllers/Login_Users/Personal_information.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";

const router = Router();
router.get('/name/:name',[Jwt.validatetoken],User.GetUsersName)
router.get('/id/:id',[Jwt.validatetoken],User.GetUsersId)
router.post("/", User.CreateUser);
router.post("/login", User.Login);
router.get("/User", [Jwt.validatetoken, Jwt.isAdmin], User.GetUsers);
router.delete("/delete/:id", [Jwt.validatetoken, Jwt.isAdmin], User.DeleteUser);

// routas de autiticacion
router.get("/auths",Jwt.validatetoken, Auth.TokenAccess);
export default router;

// routas de datos personales
router.put("/personal_information/:name",[Jwt.validatetoken],Personal.UpdatePersonalInformation);
