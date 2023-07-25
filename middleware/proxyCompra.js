import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import { Compra } from "../controller/Compra.js";   

const proxyCompra = express(); 
proxyCompra.use((req,res,next)=>{
     console.log(req.body);

    try {
            let dataValidada =plainToClass(Compra, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
            console.log(dataValidada);
            console.log(req.body);
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
    })
    
    export default proxyCompra;