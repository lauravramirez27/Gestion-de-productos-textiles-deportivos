import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";

const Cliente = Router();
dotenv.config();

/***
 * lista los clientes alfabeticamente
 */
Cliente.get("/:id?",(req,res)=>{
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