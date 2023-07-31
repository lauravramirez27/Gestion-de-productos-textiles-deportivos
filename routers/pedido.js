import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Pedido = Router();
dotenv.config();

/***
 * lista los Pedido que estan pendientes a entregar
 */
Pedido.get("/pedido/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM pedido WHERE id_pedido=${req.params.id}`] 
    :[`SELECT * FROM pedido WHERE estado!='Entregado' `]
    con.query(...sql,
     (err,data,fils)=>{
        if (err) {
            console.log(err);
            res.send({Error: 400, Message: "Error en la consulta de los datos"});
        }else{
            res.send(data);
        }
     }
     )
 
 })

 Pedido.get("/Productospedidos",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    let query = `SELECT producto.*
    FROM inventario i 
    INNER JOIN pedido
    ON i.id_Inventario = pedido.id_Inventario
    INNER JOIN producto 
    ON i.id_Producto = producto.id_Producto`;
    con.query(query,
     (err,data,fils)=>{
        if (err) {
            console.log(err);
            res.send({Error: 400, Message: "Error en la consulta de los datos6"});
        }else{
            res.send(data);
        }
     }
     )
 
 })
 export default Pedido