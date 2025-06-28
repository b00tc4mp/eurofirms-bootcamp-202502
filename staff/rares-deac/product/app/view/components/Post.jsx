import { logic } from '../../logic'

import { useContext } from '../../context'

// export const Post = props => {
//     const post = props.post
//     const onPostDeleted = props.onPostDeleted

export const Post = ({ post, onPostDeleted}) => {
    const {alert, confirm} = useContext()

    const handleDeleteClick = () => {
        confirm('Delete post?')
            .then ( result => {
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

    console.log('Post -> render')


    return <article key={post.id}>
        <h3 className="font-bold">{post.author.username}</h3>

        <img src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}