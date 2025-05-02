import { useEffect, useState } from 'react'
import { logic } from '../../logic'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            const posts = logic.getPosts()

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    console.log('Posts -> render')

    return <>
        {posts.map(post => {
            return <article key={post.id}>
                <h3>{post.author}</h3>

                <img src={post.image} alt="" />

                <p>{post.text}</p>

                <time>{post.date}</time>
            </article>
        })}
    </>
}
//es un funcionamiento muy parecido a lo que hicimos para que apareciera el mensaje de bienvenida con el nombre del usuario de home. Se podria haber implementamos en la Home pero por no hacer la pg con tanto codigo se ha creado este nuevo componente
//lo que varia es lo que devolvemos, que sería cada uno de los post con sus datos