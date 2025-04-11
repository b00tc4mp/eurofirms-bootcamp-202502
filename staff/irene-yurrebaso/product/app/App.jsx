export const App = () => {
    console.log('App -> render')

    //vite esta convirtiendo estos componentes html a javascript DOM y mostrandolos en el div root
    return <>
        <h1>Hola, App!</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi quod esse beatae corporis impedit debitis sunt culpa perferendis rem ullam aspernatur iste qui omnis, assumenda accusantium. Quas, deserunt repellat!</p>

        <ul>
            <li>rojo</li>
            <li>amarillo</li>
            <li>verde</li>
        </ul>
    </>
}