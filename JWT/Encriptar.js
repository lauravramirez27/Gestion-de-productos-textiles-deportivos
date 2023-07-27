import {SignJWT  } from "jose";
import  Express  from "express";

const Encriptar= Express.Router();
Encriptar.use(Express.json());


Encriptar.use("/",async(req,res,next)=>{
    
    const encoder = new TextEncoder();
    const jwtConstructor = new SignJWT(req.body);
    const jwt = await jwtConstructor
    .setProtectedHeader({alg:"HS256", typ:"JWT"})
    .setIssuedAt()
    .setExpirationTime('30m')
    .sign(encoder.encode(process.env.JWT));
    
    req.body = jwt
    next()
    
})

export default Encriptar