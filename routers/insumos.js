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
Insumos.get("/insumo/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM Insumos WHERE id_Insumo=${req.params.id}`] 
    :[`SELECT * FROM Insumos ORDER BY nombre`]
    con.query(...sql,
     (err,data,fils)=>{
        if (err) {
            console.log(err);
            res.send({Error: 400, Message: "Error en la consulta de los datos"});
        }else{
            res.send(data);
        }
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
            if (err) {
                console.log(err);
                res.send({Error: 400, Message: "Error en la consulta de los datos"});
            }else{
                res.send(data);
            }
        }
    )
})

Insumos.get('/N_insumos',proxyInsumo,(req, res)=>{
    con.query(
        `SELECT i.*,pr.nombre
        FROM insumos i 
        INNER JOIN producto_insumo pin
        ON i.id_Insumo = pin.id_Insumo
        INNER JOIN producto pr 
        ON pr.id_Producto= pin.id_Producto`,
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



     export default Insumos;