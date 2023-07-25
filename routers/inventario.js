import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import  proxyInventario  from "../middleware/proxyInventario.js";

const Inventario = Router();
dotenv.config();

/***
 * lista los inventarios alfabeticamente
 */
Inventario.get("/:id?",(req,res)=>{
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

     Inventario.post('/',proxyInventario,(req, res)=>{
        con.query(
            `INSERT INTO inventario SET ?`,
            req.body,
            (err, data, fils)=>{
                console.log(err);
                console.table(data);
                res.status(200).send(data)
            }
        )
    })
    

export default Inventario