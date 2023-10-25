import { fileURLToPath } from 'url';
import { BACKEND_URL } from "../config.js";
import path from "path";


const __filename = fileURLToPath(import.meta.url);


export const urlArchivos = path.join(path.dirname(__filename), '../uploads');
export const avatarfile = path.join(path.dirname(__filename), '../uploads/icon');

export const Archivos = `http://${BACKEND_URL}/api/file/`  
export const AvatarUser = `http://${BACKEND_URL}/api/file/avatar/`

