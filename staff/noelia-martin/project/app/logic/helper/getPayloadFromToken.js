export const getPayloadFromToken = tokenFamily => {
    const parts = tokenFamily.split('.')
    const payloadB64 = parts[1]
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}