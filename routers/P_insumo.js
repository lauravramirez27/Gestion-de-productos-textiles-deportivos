import { Router } from "express";
import con from "../data/data.js";
import proxyP_insumo from "../middleware/proxyP_insumo.js";
import dotenv from "dotenv";

const P_insumo = Router();
dotenv.config();
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

 P_insumo.post('/',proxyP_insumo,(req, res)=>{
    con.query(
        `INSERT INTO Producto_Insumo SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})
 export default P_insumo