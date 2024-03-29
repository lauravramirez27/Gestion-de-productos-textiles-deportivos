import { Router } from "express";
import con from "../data/data.js";
import proxyP_insumo from "../middleware/proxyP_insumo.js";
import dotenv from "dotenv";

import { verificaToken } from "../JWT/ValidaToken.js";

const P_insumo = Router();
dotenv.config();

/**
 * Lista los insumos necesarios para un producto
 */
P_insumo.get("/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM Producto_Insumo WHERE id_PI=${req.params.id}`] 
    :[`SELECT * FROM Producto_Insumo `]
    con.query(...sql,
     (err,data,fils)=>{
        if (err) {
            console.log(err);
            res.send({Error: 400, Message: "Error en la consulta de los datos"});
        }else{
            res.send(data);
        }
     }
     )
 
 })

 /**
  * Crea el registro de los insumos necesarios para un producto
  */
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