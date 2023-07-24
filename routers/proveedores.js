import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyProveedores from "../middleware/proxyProveedores.js";


const Proveedores = Router();
dotenv.config();

/***
 * lista los proveedores alfabeticamente
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

 /**
  * Crear un proveedor
  */
 Proveedores.post('/',proxyProveedores,(req, res)=>{
    con.query(
        `INSERT INTO proveedores SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})

 export default Proveedores