import express from "express";
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {P_insumo} from "../controller/P_insumo.js";

const proxyP_insumo = express(); 
proxyP_insumo.use((req,res,next)=>{
     console.log(req.body);

    try {
            let dataValidada =plainToClass(P_insumo, req.body ,{excludeExtraneousValues: true});
            req.body = JSON.parse(JSON.stringify(dataValidada));
            console.log(dataValidada);
            console.log(req.body);
            next();
        }catch (err){
            res.status(err.status).send(err);
        }
    })
    
    export default proxyP_insumo;