import { logic } from '../../logic'
import { useContext } from '../../context'

export const Post = ({ post, onPostDeleted }) => {
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        confirm('Delete post?')
            .then(result => {
                if (result)
                    try {
                        logic.removePost(post.id)
                            .then(() => onPostDeleted())
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })
    }
    console.log('Post -> render') //We INFORM when we paint the Post.

    return <article className="w-100 mb-10">

        <h3 className="my-5 rounded-lg font-bold text-blue-800 px-2 py-2 bg-blue-300 border-2 border-blue-500">{post.author.username}</h3>

        <img className="my-5 rounded-lg border-2 border-blue-500" src={post.image} alt="" />

        <p className="my-5 rounded-lg font-semibold text-blue-700 px-2 py-2 bg-blue-100 border-2 border-blue-400">{post.doctor}</p>

        <p className="my-5 rounded-lg font-semibold text-blue-700 px-2 py-2 bg-blue-100 border-2 border-blue-400">{post.treatment}</p>

        <p className="my-5 rounded-lg font-semibold text-blue-700 px-2 py-2 bg-blue-100 border-2 border-blue-400">{post.city}</p>

        <p className="my-5 rounded-lg text-blue-700 px-2 py-2 bg-blue-100 border-2 border-blue-400">{post.experience}</p>

        <time>{post.date}</time>

        {post.own && <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium mx-85 cursor-pointer" onClick={handleDeleteClick}>Delete</button>}

    </article >
}