import {jwtVerify  } from "jose";
import  Express  from "express";

export async function verificaToken(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).send({ "error": "Token faltante en el encabezado de autorización" });
    }
    try {
      const encoder = new TextEncoder();
      const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
      );
      const { endpoint } = jwtData.payload.json;
      const requestedEndpoint = req.params;
      console.log(requestedEndpoint);
      console.log(endpoint);
      console.log(req.baseUrl);
      if (`/${endpoint.tabla}` !== req.baseUrl) {
        
        return res.status(403).send({ "error": "No tienes permiso para acceder a este endpoint"});
      }
      req.jwtData = jwtData;
      next();
    } catch (error) {
      res.status(400).send({ "error": "Algo salió mal con la verificación del token" });
    }
  }


