import { logic } from '../../logic'

export const CreatePost = props => {
const onCancelClicked = props.onCancelClicked
const onPostCreated = props.onPostCreated

    console.log('CreatePost -> render')

    const handleCancelClick = () => onCancelClicked() 

    //los formularios siempre tienen un evento
    const handleCreatePostSubmit = event => {
        event.preventDefault()

        //traemos el formulario del evento con la propiedad target (DOM)
        const form = event.target

        //traemos los input del formulario
        const image = form.image.value //utilizamos el id del input
        const text = form.text.value

        //llevamos los datos a la interfaz, con una lógica que cree el post
        try {
            logic.createPost(image, text)

            form.reset()

            //avisa a la Home que ya se ha creado un post
            onPostCreated()
            
        } catch(error) {
            alert(error.message)
        }
    }

    return <div className="py-5">
        <h1 className="text-2xl my-3">Create Post</h1>
        <form className="flex flex-col gap-5" onSubmit={handleCreatePostSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="image">Image</label>
                <input className="border-2 border-solid p-1" type="text" id="image" name="image" placeholder="the post image" />
            </div>
            <div className="flex flex-col" gap-1>
                <label htmlFor="text">Text</label>
                <input className="border-2 border-solid p-1" type="text" id="text" name="text" placeholder="the post text" />
            </div>
            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-white py-2 px-4" type="submit">Create</button>
            </div>
        </form>
    </div>
}