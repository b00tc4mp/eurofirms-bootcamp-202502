import { logic } from '../../logic'
import { ValidationError } from 'com' //Nuevo: importamos constructoras de errores del paquete com

export const CreatePost = ({ onCancelClicked, onPostCreated, alert }) => {
    const handleCancelClick = () => onCancelClicked()

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => {
                    form.reset()

                    onPostCreated()
                })
                .catch(error => {
                    console.error(error)
                    //alert(error.message)
                    alert('ERROR: ' + error.message)
                })
        } catch (error) {
            console.error(error)
            //alert(error.message)
            if (error instanceof ValidationError)
                alert('WARN: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('CreatePost -> render')

    return <div className="mt-2">
        <h1 className="text-xl">Create Post</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreatePostSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="image">Image</label>
                <input className="border-2 px-1" type="text" id="image" name="image" placeholder="the post image" />
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