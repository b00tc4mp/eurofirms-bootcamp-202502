import { data } from "../data";
import { validate } from "com";
export const deleteProvider =(providerId)=>{
    validate.providerId(providerId);
    return fetch(`${import.meta.env.VITE_API_URL}providers/${providerId}`,{
        method:'DELETE',
        headers:{
            Authorization: `Bearer ${data.getToken()}`,
        },
    })
    .then((response)=>{
        if(response.status===204){
            return;
        }
        return response.json().then((body)=>{
            const {message}=body;
            throw new Error(message);
        })
    })
    .catch((error)=>{
        throw error;
    }) 
}