import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {proveedor} from "../controller/proveedores.js";
import { jwtVerify } from "jose";

const proxyProveedores = express(); 
proxyProveedores.use((req,res,next)=>{
     console.log(req.body);

    try {
            let dataValidada =plainToClass(proveedor, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
            console.log(dataValidada);
            console.log(req.body);
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
    })
    
    export default  proxyProveedores;