import { useEffect, useState } from 'react'

import { Post } from './Post'

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
    
    //recibimos por props cada post que hay en el array posts
    //mapea cada dato a un componente de react, y le envia el dato con la propiedad post, y una funcion para eliminar post
    return <>
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted}/>)}
    </>
}