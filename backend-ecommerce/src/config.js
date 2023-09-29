import { config } from "dotenv";
config()

export const PORT = process.env.PORT 
export const DATABASE_NAME = process.env.DATABASE_NAME 
export const DATABASE_USER = process.env.DATABASE_USER 
export const HOST = process.env.HOST 
export const PASSWORD = process.env.DATABASE_PASSWORD 
export const SECRET = process.env.SECRET_KEY 
export const BACKEND_URL = process.env.BACKEND_URL 