import { createContext, useContext as useContextReact } from 'react'

export const Context = createContext() //Create a new context to share global data among components

export const useContext = () => useContextReact(Context) // This hook use useContextReact to access to Context = NOW we can write useContext() instead of useContext(Context)