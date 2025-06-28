import { createContext, useContext as useContextReact } from 'react'
//createContext te crea un componente de react que te permite inyectar un objeto para ofrecer contexto en cualquier otro componente
//Hook useContext para usar el contexto, como nosotros utilizaremos la palabra useContext, vamos a renombrar el original de react y se llamará useContextReact

export const Context = createContext() //Creamos y exportamos el componente de react Context

export const useContext = () => useContextReact(Context) //Creamos y exportamos una función nuestra, llamada useContext, que cuando se la llame devolverá el useContextReact (el useContext original de React), indicamos que utilice el contexto creado anteriormente