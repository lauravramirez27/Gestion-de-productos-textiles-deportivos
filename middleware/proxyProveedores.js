import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {proveedor} from "../controller/proveedores.js";

const proxyProveedores = express(); 
proxyProveedores.use(async(req,res,next)=>{
     console.log(req.body);

     const encoder = new TextEncoder();
        const jwtData =await jwtVerify(req.body,encoder.encode(process.env.JWT))
        let {iat,exp,...copy}=jwtData.payload
        let comparar ={
          "id_Producto": null,
          "id_Categoria": null,
          "nombre": null,
          "talla": null,
          "color": null
        }
        if(JSON.stringify(Object.keys(comparar))==JSON.stringify(Object.keys(copy))){
          try {
            req.body = copy
            let dataValidada =plainToClass(proveedor, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
          
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
        }else{
          res.send("Los parametros a ingresar no son correctos")
        }
   

     
    })
    
    export default proxyProveedores;