import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import { verificaToken } from "../JWT/ValidaToken.js";

const Cliente = Router();
dotenv.config();

/***
 * lista los clientes alfabeticamente
 */
Cliente.get("/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM cliente WHERE id_Cliente=${req.params.id}`] 
    :[`SELECT * FROM cliente ORDER BY nombre`]
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
 export default Cliente