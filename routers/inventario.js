import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import  proxyInventario  from "../middleware/proxyInventario.js";
//import Encriptar from "../JWT/Encriptar.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Inventario = Router();
dotenv.config();

/***
 * lista los inventarios alfabeticamente
 */
Inventario.get("/:id?",verificaToken,(req,res)=>{
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
/**
 * Crea registro de inventario
 */
     Inventario.post('/',proxyInventario,(req, res)=>{
        con.query(
            `INSERT INTO inventario SET ?`,
            req.body,
            (err, data, fils)=>{
                if (err) {
                    console.log(err);
                    res.send({Error: 400, Message: "Error en la consulta de los datos"});
                }else{
                    res.send(data);
                }
            }
        )
    })
    

export default Inventario