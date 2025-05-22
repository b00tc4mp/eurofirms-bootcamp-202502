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
            } catch (error) {
                console.error(error)

                alert(error.message)
            }
    }

    return <article className="w-100 mb-10">

        <h3 className="my-5 rounded-lg font-bold text-orange-800 px-2 py-2 bg-orange-300 border-2 border-orange-500">{post.author}</h3>

        <img className="my-5 rounded-lg border-2 border-orange-500" src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="border-2 rounded-md bg-orange-50 text-orange-900 px-2 font-medium mx-85 cursor-pointer" onClick={handleDeleteClick}>Delete</button>}

    </article >

}