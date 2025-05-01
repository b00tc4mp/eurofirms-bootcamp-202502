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

            logic.createPost(image, text)

            form.reset()

            onPostCreated()

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">CREATE POST Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreatePostSubmit}>

            <div className="flex flex-col gap">

                <label htmlFor="image" className="text-xl">Image:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="text" id="image" image="image" placeholder="Please insert an image" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="text" className="text-xl">Text:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="text" name="text" id="text" placeholder="Add a text to your post" />

            </div>

            <div className="my-2 flex justify-between">

                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="border-1 rounded-md bg-blue-50 text-blue-900 px-2 cursor-pointer" type="submit">Create</button>

            </div>

        </form>

    </div>

}