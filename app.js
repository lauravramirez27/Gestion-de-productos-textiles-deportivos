import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import Productos from "./routers/producto.js";
import Proveedores from "./routers/proveedores.js";
import Insumos from "./routers/insumos.js";
import Compra from "./routers/compraInsumo.js";

dotenv.config();
const expressApp = express();

expressApp.use(express.json());
expressApp.use('/Productos', Productos);
expressApp.use('/Proveedores', Proveedores);
expressApp.use('/Insumos', Insumos);
expressApp.use('/CompraInsumo', Compra);

let config = JSON.parse(process.env.SERVER_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});