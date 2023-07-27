import {SignJWT,jwtVerify  } from "jose";
import  Express  from "express";
import con from "../data/data.js";

// const appJWT= Express.Router();
// appJWT.use(Express.json());


// appJWT.get("/",async(req,res)=>{
//     const {id,nombre} = req.body;
//     const json ={id,nombre};
//     const encoder = new TextEncoder();
//     const jwtConstructor = new SignJWT({json});
//     const jwt = await jwtConstructor
//     .setProtectedHeader({alg:"HS256", typ:"JWT"})
//     .setIssuedAt()
//     .setExpirationTime('30m')
//     .sign(encoder.encode(process.env.JWT));
//      res.send({jwt})
    
// })

async function generarToken(id, nombre, endpoint) {
    let json = {
      id: id,
      nombre: nombre,
      endpoint: endpoint // Incluir el campo "endpoint" en el objeto "json"
    };
  
    try {
      const encoder = new TextEncoder();
      const jwtconstructor = new SignJWT({ json });
      const jwt = await jwtconstructor
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encoder.encode(con.token));
        
      return jwt;
    } catch (error) {
      throw error;
    }
  }




export default generarToken;
