import { logic } from '../../logic'

export const Post = ({ post, onPostDeleted }) => {
    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.removePost(post.id)

                onPostDeleted()
            } catch (error) {
                alert(error.message)
            }
    }

    return <article>
        <h3 className="font-bold">{post.author}</h3>

        <img src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}