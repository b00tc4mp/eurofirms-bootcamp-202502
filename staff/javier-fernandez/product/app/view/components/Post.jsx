import { logic } from '../../logic'  
import { useContext } from '../../context'
 
// export const Post = props => {
//      const post = props.post
//      const onPostDeleted = props.onPostDeleted
export const Post = ({ post, onPostDeleted }) => {
    const [likes, setLikes] = useState(0)
    const handleDeleteClick = () => {
        if (result)
            try {
                logic.removePost(post.id)
                    .then(() => onPostDeleted())
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    })
            } catch (error){
                console.error(error)
                
                alert(error.message)
            }
    }

    let isAdmin 

    try { 
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Post -> render')

    return <article className= 'sm:w-[400px] w-[250px] border-2 border-black mb-4 p-2 rounded-xl' >
        <h3 className="font-bold">{post.author.username}</h3>

        <img src={post.image} alt="" className='mx-auto'/>

        <p>{post.text}</p>

        <time>{post.date}</time>

        <button className= 'border-4 border black px-2 mx-1 cursor-pointer' onClick={()=> setLikes(likes +1)}>❤{likes}</button>
        
        {(post.own || isAdmin) && <button className='border-4 border black px-2 mx-1 cursor-pointer' onClick={handleDeleteClick}>🗑️</button>}
    </article> 
}