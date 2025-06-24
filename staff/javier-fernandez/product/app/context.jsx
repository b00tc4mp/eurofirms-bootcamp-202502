import { createContext, useContext as useContexsReact } from 'react'

export const Context = createContext()

export const useContext = () => useContextReact(Context)