import { logic } from '../../logic'

export const Post = ({ post, onPostDeleted }) => {
    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            // try {
            //     logic.removePost(post.id)
            //     onPostDeleted()
            // } catch (message) {
            //     alert(error.message)
            // }
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

    return <article>
        <h3 className="font-bold">{post.author}</h3>

        <img src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="mx-2" onClick={handleDeleteClick}>🗑</button>}
    </article>
}