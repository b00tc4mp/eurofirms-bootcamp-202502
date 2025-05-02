import { logic } from '../../logic'

export const CreatePost = props => {
    const onCancelClicked = props.onCancelClicked
    const onPostCreated = props.onPostCreated

    console.log('CreatePost -> render')

    const handleCancelClick = () => onCancelClicked()

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text) //usamos try y catch para llamar a la logica ya que necesitamos esta funcion (la cuál creamos exclusivamente para utilizar aqui)

            form.reset()

            onPostCreated() //un vez guardado el nuevo posts debe avisar a la home y esta pintara Posts
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="mt-2">
        <h1 className="text-xl">Create Post</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreatePostSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="image">Image</label>
                <input className="border-2 px-1" type="text" id="image" image="image" placeholder="the post image" />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="text">Text</label>
                <input className="border-2 px-1" type="text" id="text" name="text" placeholder="the post text" />
            </div>

            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-white px-2" type="submit">Create</button>
            </div>
        </form>
    </div>
}
//Toda esta pg es para: Ultima Configuracion de App.5, creacion de Post

//La configuracion es muy parecida a la de app.4 en el registro de usuarios