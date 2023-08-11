import {config} from "dotenv";
config()

export const PORT= process.env.PORT || "3000"
export const DATABASE_NAME= process.env.DATABASE_NAME || "ecommerce"
export const DATABASE_USER= process.env.DATABASE_USER || "root"
export const HOST = process.env.HOST || "localhost"
export const PASSWORD = process.env.DATABASE_PASSWORD || ""
