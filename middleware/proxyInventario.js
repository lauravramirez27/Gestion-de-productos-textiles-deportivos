import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import { Inventario } from "../controller/Inventario.js";

const proxyInventario = express(); 
proxyInventario.use((req,res,next)=>{
     console.log(req.body);

    try {
            let dataValidada =plainToClass(Inventario, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
            console.log(dataValidada);
            console.log(req.body);
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
    })
    
    export default proxyInventario;