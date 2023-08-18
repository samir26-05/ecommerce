import { fileURLToPath } from 'url';
import path from "path";


const __filename = fileURLToPath(import.meta.url);


export const urlArchivos = path.join(path.dirname(__filename), '../uploads');
export const ipFileServer = "http://localhost:3000/api/file/"