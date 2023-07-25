import dotenv from "dotenv";

dotenv.config()

export const CONFIG = JSON.parse(process.env.SERVER_CONFIG)
export const CONNECT = process.env.MY_CONFIG