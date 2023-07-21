import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import Productos from "./routers/producto.js";

dotenv.config();
const expressApp = express();

expressApp.use(express.json());
expressApp.use('/Productos', Productos);

let config = JSON.parse(process.env.SERVER_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});