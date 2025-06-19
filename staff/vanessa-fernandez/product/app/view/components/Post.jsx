import { logic } from '../../logic'

export const Post = ({ post, onPostDeleted }) => {
    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.removePost(post.id)
                    .then(() => onPostDeleted())
                    
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    })
            } catch(error) {
                console.error(error)

                alert(error.message)
            }
    }

    console.log('Post -> render')

    return <article className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white flex flex-col gap-3">
        <h3 className="bg-[#f0f4ff] text-gray-800 font-semibold text-lg rounded px-2 py-1 inline-block">{post.author.username}</h3>

        <img src={post.image} alt="" className="w-full h-60 object-cover rounded-lg " />

        <p className="bg-[#f8fafc] mt-3 p-3 rounded-md text-gray-700">{post.text}</p>

        <div className="flex justify-between items-center text-sm text-gray-500">
            <time className="block mt-2 text-sm text-gray-500">{post.date}</time>

            <span> 💖 {post.likes.length} likes</span>
        </div>
        {post.own && (
            <div className="flex justify-end mt-3">
        
                <button className="text-white bg-[#0ab5ee] font-thin border-none rounded-md cursor-pointer px-3 py-1 text-sm transform transition-transform duration-200 hover:scale-105"
                    title="Delete post"
                    type="button"
                    onClick={handleDeleteClick}>Delete 🗑️
                </button>
            </div>    
        )}
    </article>
}