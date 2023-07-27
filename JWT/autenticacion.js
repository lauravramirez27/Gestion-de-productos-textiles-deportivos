import generarToken from "./JWT.js";

export async function autenticacion(req, res) {
  const { id, nombre } = req.params;
  const endpoint = req.query;
  

  try {
    const jwt = await generarToken(id, nombre, endpoint);
    res.send({ jwt });
  } catch (error) {
    res.status(500).send(error);
  }
}