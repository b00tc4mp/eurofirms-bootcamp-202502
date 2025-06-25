//createContext crea un componente de react q permite inyectar luego un objeto para ofrecer contexto en cualquier otro componente
//cambiamos el nombre a useContext para poder usar otra variable nosotros luego con ese mismo nombre
import { createContext, useContext as useContextReact } from 'react'

export const Context = createContext()

export const useContext = () => useContextReact(Context)