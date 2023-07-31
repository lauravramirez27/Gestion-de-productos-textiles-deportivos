import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyProveedores from "../middleware/proxyProveedores.js";
//import Encriptar from "../JWT/Encriptar.js";
import { verificaToken } from "../JWT/ValidaToken.js";


const Proveedores = Router();
dotenv.config();

/***
 * lista los proveedores alfabeticamente
 */
Proveedores.get("/:id?",verificaToken,(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM proveedores WHERE id_Proveedor=${req.params.id}`] 
    :[`SELECT * FROM proveedores ORDER BY nombre`]
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
  * Crear un proveedor
  */
 Proveedores.post('/',proxyProveedores,(req, res)=>{
    con.query(
        `INSERT INTO proveedores SET ?`,
        req.body,
        (err, data, fils)=>{
            if(err){
                console.log(err);
                if (err.errno===1062) {
                    res.send({Status:200,Message:"El id ingresado ya existe,ingrese un nuevo id"})
                }else{
                res.send(err)}
            }else{
                res.send({Status:200, Message:"La data se ha agregado"})
            }
        }
    )
})
 
 export default Proveedores