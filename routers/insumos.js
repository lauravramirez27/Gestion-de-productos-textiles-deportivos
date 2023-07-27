import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyInsumo from "../middleware/proxyInsumos.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Insumos = Router();
dotenv.config();

/***
 * lista los Insumos alfabeticamente
 */
Insumos.get("/:id?",verificaToken,(req,res)=>{
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

     /**
  * Crear un Insumo
  */
    Insumos.post('/',proxyInsumo,(req, res)=>{
    con.query(
        `INSERT INTO Insumos SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})

     export default Insumos;