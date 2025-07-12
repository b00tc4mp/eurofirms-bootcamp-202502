export const getPayloadFromToken = token => {
    //El payload es la parte de en medio entre dos puntos, por lo que usamos un split q separa el token en 3 partes por los puntos.
    const parts = token.split('.')
    //del string cojo el indice 1, q es la seguna parte, el payload
    const payloadB64 = parts[1]
    //uso el metodo del navegador atob para convertirlo a json
    const payloadJSON = atob(payloadB64)
    //y parse para convertirlo a objeto
    const payload = JSON.parse(payloadJSON)

    return payload
}