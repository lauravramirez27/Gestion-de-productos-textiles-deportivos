import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyProducto from "../middleware/proxyBodegas.js";

const Productos = Router();
dotenv.config();

/***
 * lista los productos alfabeticamente
 */
Productos.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM producto WHERE id=${req.params.id}`] 
    :[`SELECT * FROM producto ORDER BY nombre`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )
 
 })
 /**
  * Crear un producto
  */
 Productos.post('/',proxyProducto,(req, res)=>{
    con.query(
        `INSERT INTO producto SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})

 export default Productos;