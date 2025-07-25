import { useEffect, useState } from 'react'
import { Post } from './Post'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const Posts = () => {
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
        try{
            logic.getPosts()
            .then(posts => {
                setPosts(posts)
            })
            .catch(error => {
                console.error(error)

                alert(error.message)
            })
           

        }catch (error) {
            console.error(error)
            
            alert(error.message)
        }
    }

    console.log('Posts -> render')

    return <>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map(post => <Post key={post.id} post={post} onPostDeleted={handlePostDeleted} />)}
        </div>

    </>
}