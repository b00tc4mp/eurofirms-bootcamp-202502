import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { Post } from './Post'

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
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />)} {/* NUEVO tras la separacion en archivos: pasamos la configuracion del return al ficero Post, pasandole todas esas propiedades */}
    </>
}
//Movemos todo lo que habia dentro de este return a un nuevo fichero llamado Post (en singular ya que se trabaja en él los post de uno en uno)
//la key hay que mantenerla en esta pg, ya es una forma de react de identificacion única de cada post (para utilizar la herramienta de React Developper Tools de chrome, es necesario)