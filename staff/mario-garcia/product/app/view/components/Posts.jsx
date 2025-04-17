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

            return <article className="w-100 mb-10" key={post.id}>

                <h3 className="my-5 rounded-lg font-bold text-orange-800 px-2 py-2 bg-orange-300">{post.author}</h3>

                <img className="my-5 rounded-lg" src={post.image} alt="" />

                <p>{post.text}</p>

                <time>{post.date}</time>

            </article>

        })}

    </>

}