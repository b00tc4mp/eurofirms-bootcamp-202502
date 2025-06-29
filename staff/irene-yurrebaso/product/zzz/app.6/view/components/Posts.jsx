import { useEffect, useState } from 'react'

import { Post } from './Post'

import { logic } from '../../logic'

export const Posts = () => {
    //array vacio porque inicialmente no hay nada cargado
    const [posts, setPosts] = useState([])

    //cuando cargue el componente Home se dispara useEffect, se cargan los datos o posts
    useEffect(() => {
        try {
            logic.getPosts()
                //los posts ahora vienen de la api por lo que hay que hacer un then/catch
                .then(posts => {
                    //cuando recibamos los posts, los guardamos en State
                    setPosts(posts)
                })
                .catch(error => {
                    //para el developer
                    console.error(error)
                    //para el usuario final
                    alert(error.message)
                })
        } catch (error) {
            //para el developer
            console.error(error)
            
            //para el usuario final
            alert(error.message)
        }
    }, [])

    //pedir a Home que se refresque cuando hemos eliminado un post. Misma logica que el useEffect arriba.
    const handlePostDeleted = () => {
        try {
            //trae un post menos
            logic.getPosts()
                .then(posts => {
                    //se vuelve a guardar en bbdd
                    setPosts(posts)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch(error) {
            console.error(error)

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