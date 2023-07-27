import { Router } from "express";
import con from "../data/data.js";
import proxyP_insumo from "../middleware/proxyP_insumo.js";
import dotenv from "dotenv";
import Encriptar from "../JWT/Encriptar.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const P_insumo = Router();
dotenv.config();

/**
 * Lista los insumos necesarios para un producto
 */
P_insumo.get("/:id?",verificaToken,(req,res)=>{
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

 /**
  * Crea el registro de los insumos necesarios para un producto
  */
 P_insumo.post('/',Encriptar,proxyP_insumo,(req, res)=>{
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