import { useEffect, useState } from 'react'

import { logic } from '../../logic'

export const Posts = () => {
    //array vacio porque inicialmente no hay nada cargado
    const [posts, setPosts] = useState([])

    //cuando cargue el componente Home se dispara useEffect, se cargan los datos o posts
    useEffect(() => {
        try {
            const posts = logic.getPosts()

            //cuando guardamos en un useState se repinta el componente, con lo que el array useState([]) deja de estar vacio.
            setPosts(posts)
            
        } catch (error) {
            alert(error.message)
        }
    }, [])

    //pedir a Home que se refresque cuando hemos eliminado un post. Misma logica que el useEffect arriba.
    const handlePostDeleted = () => {
        try {
            //trae un post menos
            const posts = logic.getPosts()

            //se vuelve a guardar en bbdd localStorage
            setPosts(posts)
        } catch(error) {
            alert(error.message)
        }
    }

    console.log('Posts -> render')

    return <>
        {posts.map(post => {
            const handleDeleteClick = () => {
                if (confirm('Delete post?'))
                    try {
                        logic.removePost(post.id)

                        //pedir a Home que se refresque cuando hemos eliminado un post
                        handlePostDeleted()
                    } catch(error) {
                        alert(error.message)
                }
            }

            return <article key={post.id} className= "mb-5">
                <h3 className="font-bold">{post.author}</h3>
                <img className = "max-w-xs" src={post.image} alt=""></img>
                <p>{post.text}</p>
                <time>{post.date}</time>
                {post.own && <button className="mx-3 border-b-2 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
            </article>
            }
        )}
    </>
}