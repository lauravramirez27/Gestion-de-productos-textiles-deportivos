import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyCompra from "../middleware/proxyCompra.js";


const Compra = Router();
dotenv.config();

/***
 * lista las compra de insumo alfabeticamente
 */
Compra.get("/:id?",(req,res)=>{
    let sql = (req.params.id)
    ?[`SELECT * FROM compra_Insumos WHERE id=${req.params.id}`] 
    :[`SELECT * FROM compra_Insumos`]
    con.query(...sql,
     (err,data,fils)=>{
         console.log(err);
         console.table(data);
         res.send(data);
     }
     )});

      /**
  * Crear una compra
  */
 Compra.post('/',proxyCompra,(req, res)=>{
    con.query(
        `INSERT INTO compra_Insumos SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(200).send(data)
        }
    )
})

export default Compra;