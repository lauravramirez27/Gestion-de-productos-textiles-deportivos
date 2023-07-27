import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Pedido = Router();
dotenv.config();

/***
 * lista los Pedido que estan pendientes a entregar
 */
Pedido.get("/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM pedido WHERE id=${req.params.id}`] 
    :[`SELECT * FROM pedido WHERE estado!='Entregado' `]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )
 
 })
 export default Pedido