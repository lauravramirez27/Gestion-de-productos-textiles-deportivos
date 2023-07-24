import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";


const Compra = Router();
dotenv.config();

/***
 * lista las compra de insumo alfabeticamente
 */
Compra.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM compra_Insumos WHERE id=${req.params.id}`] 
    :[`SELECT * FROM compra_Insumos`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )});

export default Compra;