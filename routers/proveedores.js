import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";


const Proveedores = Router();
dotenv.config();

/***
 * lista los productos alfabeticamente
 */
Proveedores.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM proveedores WHERE id=${req.params.id}`] 
    :[`SELECT * FROM proveedores ORDER BY nombre`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )
 
 })

 export default Proveedores