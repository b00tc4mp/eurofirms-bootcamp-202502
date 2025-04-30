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

    console.log('Posts -> render')

    return <>
        {posts.map(post => <article key={post.id}>
                <h3>{post.author}</h3>
                <img className = "max-w-xs" src={post.image} alt=""></img>
                <p>{post.text}</p>
                <time>{post.date}</time>
            </article>
        )}
    </>
}