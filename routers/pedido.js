import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";

const Pedido = Router();
dotenv.config();

/***
 * lista los Pedido que estan pendientes a entregar
 */
Pedido.get("/:id?",(req,res)=>{
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