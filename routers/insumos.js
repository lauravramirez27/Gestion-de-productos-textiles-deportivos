import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";

const Insumos = Router();
dotenv.config();

/***
 * lista los Insumos alfabeticamente
 */
Insumos.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM Insumos WHERE id=${req.params.id}`] 
    :[`SELECT * FROM Insumos ORDER BY nombre`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )});

     export default Insumos;