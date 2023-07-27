import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Cliente = Router();
dotenv.config();

/***
 * lista los clientes alfabeticamente
 */
Cliente.get("/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM cliente WHERE id=${req.params.id}`] 
    :[`SELECT * FROM cliente ORDER BY nombre`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )
 
 })
 export default Cliente