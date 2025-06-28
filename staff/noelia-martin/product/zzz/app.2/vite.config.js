import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()]
})

//con este fichero de configuración vite se entera que trabajaremos con react y con tailwindcss