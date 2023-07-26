import 'reflect-metadata';
import express from 'express';

import Productos from "./routers/producto.js";
import Proveedores from "./routers/proveedores.js";
import Insumos from "./routers/insumos.js";
import Compra from "./routers/compraInsumo.js";
import { CONFIG } from './config/config.js';
import P_insumo from "./routers/P_insumo.js";
import Inventario from "./routers/inventario.js";
import Pedido from "./routers/pedido.js";
import Cliente from "./routers/cliente.js";

const expressApp = express();

expressApp.use(express.json());
expressApp.use('/Productos', Productos);
expressApp.use('/Proveedores', Proveedores);
expressApp.use('/Insumos', Insumos);
expressApp.use('/CompraInsumo', Compra);
expressApp.use('/P_insumo', P_insumo);
expressApp.use('/Inventario', Inventario);
expressApp.use('/Pedido', Pedido);
expressApp.use('/Cliente', Cliente);


expressApp.listen(CONFIG, ()=>{
    console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});