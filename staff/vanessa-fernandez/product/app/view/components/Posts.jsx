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

    const handlePostDeleted = () => {
        try{

            const posts = logic.getPosts()

            setPosts(posts)

        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Posts -> render')

    return <>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map(post => {
                const handleDeletedClick = () => {
                    if (confirm('Delete post?'))
                        try {
                            logic.removePost(post.id)

                            handlePostDeleted()

                        } catch(error) {
                            alert(error.message)
                        }
                }

                return <article key={post.id} className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white">
                    <h3 className="bg-[#f0f4ff] text-gray-800 font-semibold text-lg rounded px-2 py-1 inline-block">{post.author}</h3>

                    <img src={post.image} alt="" className="w-full h-auto rounded-lg mt-3" />

                    <p className="bg-[#f8fafc] mt-3 p-3 rounded-md text-gray-700">{post.text}</p>

                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                        <time className="block mt-2 text-sm text-gray-500">{post.date}</time>

                        <span> 💖 {post.likes.length} likes</span>
                    </div>
                    {post.own && <button className="mt-2 text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2" 
                    title="Delete post"
                    type="button"
                    onClick={handleDeletedClick}>Delete 🗑️</button>}
                </article>
            })}
        </div>

    </>
}