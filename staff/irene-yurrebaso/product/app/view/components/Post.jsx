import { logic } from '../../logic'

//pasamos las prop con destructuring
export const Post = ({ post, onPostDeleted}) => {
    const handleDeleteClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.removePost(post.id)
                    //si todo va bien pedir a Home que se refresque cuando hemos eliminado un post
                    .then(() => onPostDeleted())
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    } )
            } catch(error) {
                console.error(error)

                alert(error.message)
            }
    }

    return <article className= "mb-5">
        {/* ahora en mongobd author es un objeto */}
        <h3 className="font-bold">{post.author.username}</h3>
        <img className = "max-w-xs" src={post.image} alt=""></img>
        <p>{post.text}</p>
        <time>{post.date}</time>
        {post.own && <button className="mx-3 border-b-2 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}