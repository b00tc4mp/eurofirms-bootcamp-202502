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
            const handleDeleteClick = () => {
                if (confirm('Delete post?'))
                    try {
                        logic.removePost(post.id)

                        handlePostDeleted()
                    } catch (error) {
                        alert(error.message)
                    }
            }

            return <article key={post.id}>
                <h3 className="font-bold">{post.author}</h3>

                <img src={post.image} alt="" />

                <p>{post.text}</p>

                <time>{post.date}</time>

                {post.own && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
            </article>
        })}
    </>
}