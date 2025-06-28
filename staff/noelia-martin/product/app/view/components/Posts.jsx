import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { Post } from './Post'
import { useContext } from '../../context' //Me traigo Context

//export const Posts = ({ alert, confirm }) => {
export const Posts = ({ }) => {
    //Como nuestro hijo ya no va a necesitar props nuestras, borro confirm
    //Necesito traerme de Context alert, para mi, ya que hemos dejado de enviarla con props (mejor explicado en Post)
    const { alert } = useContext()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            logic.getPosts()
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [])
    const handlePostDeleted = () => {
        try {
            logic.getPosts()
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Posts -> render')
    {/* Borramos las props que mandabamos a nuestro hijo, ahora las cogerá de context */ }
    return <>
        {/* {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} alert={alert} confirm={confirm} />)} */}
        {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />)}
    </>
}