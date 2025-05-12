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
            return <article className="w-100 mb-10 " key={post.id}>
                <h3 className="bg-pink-300">{post.author} </h3>

                <img src={post.image} alt="" />

                <p>{post.text}</p>

                <time>{post.date}</time>
            </article>
        })}
    </>
}