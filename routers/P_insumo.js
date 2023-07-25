import { Router } from "express";
import con from "../data/data.js";

const P_insumo = Router();

P_insumo.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM Producto_Insumo WHERE id=${req.params.id}`] 
    :[`SELECT * FROM Producto_Insumo `]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )
 
 })
 export default P_insumo