import { Router } from "express";
import dotenv from "dotenv";
import con from "../data/data.js";
import proxyProducto from "../middleware/proxyProductos.js";

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

/**Actualizar un producto */
 Productos.put('/:id', (req, res) => {
     const productId = req.params.id;
     const updatedProduct = req.body;

     con.query(
         'UPDATE producto SET ? WHERE id = ?',
         [updatedProduct, productId],
         (err, data) => {
             if (err) {
                console.log("ERROR A ACTUALIZA");
                 console.log(err);
                 res.send(data);
             } else {
                 res.send({"Status":"200", "Message":"SE ACTUALIZA"});
             }
         }
     );
 });

 // Eliminar un producto por su ID



// Productos.delete('/:id_Producto', (req, res) => {
//     const productId = req.params

//     con.query(
//         'DELETE FROM producto WHERE id = ?',
//         [productId ],
//         (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send('Error al eliminar el producto.');
//             } else {
//                  console.log('Producto eliminado:', data.affectedRows);
//                 res.status(200).send('Producto eliminado correctamente.');
//             }
//         }
//     );
// });


 // Eliminar un producto por su ID

Productos.delete('/:id_Producto', (req, res)=>{
    con.query(
        `DELETE FROM producto WHERE ?`,
        req.params,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.send(data);
        }
    )
})

 export default Productos;