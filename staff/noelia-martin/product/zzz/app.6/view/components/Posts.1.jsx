//version anterior a la separación en ficheros

import { useEffect, useState } from 'react'
import { logic } from '../../logic'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            const posts = logic.getPosts() //recuerda: al pedir a la logica los posts, esta nos devuelve los posts que ha copiado de LocalStorage y luego modificado(el userId por username y una nueva propiedad llamada own)

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    //creamos un handle para que repinte los posts una vez haya eliminado alguno
    const handlePostDeleted = () => {
        try {
            const posts = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Posts -> render')

    return <>
        {posts.map(post => {
            //manejador
            const handleDeleteClick = () => {
                if (confirm('Delete post?')) //si en el cuadro de dialogo indicamos que es un OK, pedimos a la logica que borre el posts
                    try {
                        logic.removePost(post.id)
                        handlePostDeleted() //llamamos al handle de repintado de posts
                    } catch (message) {
                        alert(error.message)
                    }
            }
            //retorno de DOM (es una interfaz de programación para los documentos HTML y XML)
            return <article key={post.id}>
                <h3 className="font-bold">{post.author}</h3>

                <img src={post.image} alt="" />

                <p>{post.text}</p>

                <time>{post.date}</time>

                {post.own && <button className="mx-2" onClick={handleDeleteClick}>🗑</button>}
            </article>
        })}
    </>
}
//creamos el boton de la papelera que aparecera si el post fuera del usuario conectado y lo configuramos con handleDeleteClick
//este handle lo vamos a ejecutar en cada post, asi que necesitamos meternos dentro del return
//una vez se borre hay decirle a la pagina que se refresque, llamamos a un handle que se encargue de ello; el cuál crearemos fuera del return, porque será la misma configuracion para todos los posts