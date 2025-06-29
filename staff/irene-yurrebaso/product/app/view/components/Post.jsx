import { logic } from '../../logic'

import { useContext } from '../../context'

//pasamos las prop con destructuring
export const Post = ({ post, onPostDeleted }) => {
    //destructuring de las propiedades alert y confirm, q ahora vienen del Context.Provider
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        //confirm devuelve una promesa (asincronía) a la q le puedo encadenar el then
        //el confirm le llega por props pasando por la cadena App > Home > Posts > Post; depende de si es Cancel o Accept seguira un camino u otro
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

    console.log('Post -> render')

    return <article className="mb-5">
        <h3 className="font-bold">{post.author.username}</h3>

        <img className="max-w-xs" src={post.image} alt=""></img>

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="mx-3 border-b-2 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}