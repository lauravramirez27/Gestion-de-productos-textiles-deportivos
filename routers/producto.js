import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyProducto from "../middleware/proxyProductos.js";
import Encriptar from "../JWT/Encriptar.js";
import {verificaToken} from "../JWT/ValidaToken.js";

const Productos = Router();
dotenv.config();

/***
 * lista los productos alfabeticamente
 */
Productos.get("/:id_Producto?",verificaToken,(req,res)=>{
    
    let sql = 
    (req.params.id_Producto)
    ?[`SELECT * FROM producto WHERE id=${req.params.id_Producto}`] 
    :[`SELECT * FROM producto ORDER BY nombre`]
    
    con.query(...sql,
     (err,data,fils)=>{
        if (err) {
            console.log(err);
            res.send({Error: 400, Message: "Error en la consulta de los datos"});
        }else{
            // console.table(data);
            res.send(data);
        }
     })
 })
 /**
  * Crear un producto
  */
 Productos.post('/',Encriptar,proxyProducto,(req, res)=>{
    con.query(
        `INSERT INTO producto SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})

Productos.put('/:id_Producto',Encriptar,proxyProducto, (req, res)=>{
    con.query(
    `UPDATE producto SET ? WHERE id_Producto = ?`,
        [req.body, req.params.id_Producto],
        (err, data, fils) =>{
            console.log(err);
            console.table(data);
            res.send(data);
        }
    )
})


 // Eliminar un producto por su ID

Productos.delete('/:id_Producto', (req, res)=>{
    con.query(
        `DELETE FROM producto WHERE ?`,
        req.params,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.send(data);
        }
    )
})

 export default Productos;