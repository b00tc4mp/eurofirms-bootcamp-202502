import { logic } from '../../logic'

//pasamos props con destructuring
export const CreatePost = ({ onCancelClicked, onPostCreated, alert}) => {

    const handleCancelClick = () => onCancelClicked() 

    //los formularios siempre tienen un evento
    const handleCreatePostSubmit = event => {
        event.preventDefault()

        //traemos el formulario del evento con la propiedad target (DOM)
        const form = event.target

        //traemos los input del formulario
        const image = form.image.value //utilizamos el id del input
        const text = form.text.value

        //llevamos los datos a la interfaz, con una lógica que cree el post. try/catch para errores síncronos
        try {
            logic.createPost(image, text)
                //then/catch para errores asíncronos
                .then(() => {
                    form.reset()

                //avisa a la Home que ya se ha creado un post
                onPostCreated()
                })
                .catch(error => {
                    //error para en consola para el developer
                    console.error(error)

                    //mensaje error para el usuario
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            
            alert(error.message)
        }
    }

    console.log('CreatePost -> render')

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