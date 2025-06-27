import { logic } from '../../logic'

export const Post = ({ post, onPostDeleted, alert, confirm }) => {
    const handleDeleteClick = () => {
        //Ahora trabajamos con un confirm asincrono, configurado con promesa
        // Llmamos al nuevo confirm con un mensaje y acto seguido configuramos un control de errores
        // Si funciona, entramos en then: si clicamos en aceptar la variable result será true, entra en el if y borra, sino es asi, no borra
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

    // ANTIGUO cuando utilizamos confirm del navegador
    // const handleDeleteClick = () => {
    //         if (confirm('Delete post?'))
    //             try {
    //                 logic.removePost(post.id)
    //                     .then(() => onPostDeleted())
    //                     .catch(error => {
    //                         console.error(error)

    //                         alert(error.message)
    //                     })
    //             } catch (error) {
    //                 console.error(error)

    //                 alert(error.message)
    //             }
    //     }


    console.log('Post -> render')

    return <article>
        <h3 className="font-bold">{post.author.username}</h3>

        <img src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="mx-2" onClick={handleDeleteClick}>🗑</button>}
    </article>
}