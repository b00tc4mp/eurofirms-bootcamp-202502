import { useEffect, useState } from 'react';
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
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map(post => {
                return <article key={post.id} className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white">
                    <h3 className="bg-[#f0f4ff] text-gray-800 font-semibold text-lg rounded px-2 py-1 inline-block">{post.author}</h3>

                    <img src={post.image} alt="" className="w-full h-auto rounded-lg mt-3" />

                    <p className="bg-[#f8fafc] mt-3 p-3 rounded-md text-gray-700">{post.text}</p>

                    <time className="block mt-2 text-sm text-gray-500">{post.date}</time>

                </article>
            })}
        </div>

    </>
}