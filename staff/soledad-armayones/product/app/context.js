import { createContext, useContext as useContextReact } from 'react'

export const Context = createContext()

export const useContext = () => useContextReact(Context)