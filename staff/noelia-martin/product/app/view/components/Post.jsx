import { logic } from '../../logic'


// export const Post = props => {
//     const post = props.post
//     const onPostDeleted = props.onPostDeleted
export const Post = ({ post, onPostDeleted }) => {
    //manejador
    const handleDeleteClick = () => {
        if (confirm('Delete post?')) //si en el cuadro de dialogo indicamos que es un OK, pedimos a la logica que borre el posts
            try {
                logic.removePost(post.id)
                onPostDeleted() //llamamos al handle de repintado de posts //NUEVO tras la separacion en archivos: en vez de llamar al handle directamente llamamos a la variable que contiene esa props
            } catch (message) {
                alert(error.message)
            }
    }
    //retorno de DOM (es una interfaz de programación para los documentos HTML y XML)
    return <article>
        <h3 className="font-bold">{post.author}</h3>

        <img src={post.image} alt="" />

        <p>{post.text}</p>

        <time>{post.date}</time>

        {post.own && <button className="mx-2" onClick={handleDeleteClick}>🗑</button>}
    </article>
}

//En landing hay otro ejemplo de forma de destruccturing que se puede utilizar
