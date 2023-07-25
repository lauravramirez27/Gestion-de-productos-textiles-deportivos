import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";

const Inventario = Router();
dotenv.config();

/***
 * lista los inventarios alfabeticamente
 */
Inventario.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM inventario WHERE id=${req.params.id}`] 
    :[`SELECT * FROM inventario `]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )});

export default Inventario