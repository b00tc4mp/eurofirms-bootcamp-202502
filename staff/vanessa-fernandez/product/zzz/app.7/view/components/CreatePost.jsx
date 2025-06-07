import { logic } from '../../logic'

export const CreatePost = ({ onCancelClicked, onPostCreated }) => {
    //const onCancelClicked = props.onCancelClicked
    //const onPostCreated = props.onPostCreated

    const handleCancelClick = () => onCancelClicked()

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {

           logic.createPost(image,text)
                .then(() => {
                    form.reset()

                    onPostCreated()
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('CreatePost -> render')

    return <div className='mt-2'>
        <h1 className="text-[22px] font-bold text-[#119fd3] mb-4">Create Post</h1>

        <form className="flex flex-col gap-5" onSubmit={handleCreatePostSubmit}>

            <div className="flex flex-col gap-[10px]">
                <label
                    className="font-medium"
                    htmlFor="image">Image
                </label>
                <input className="border border-black bg-[#cde5ed] rounded px-3 py-2"
                    type="text"
                    id="image"
                    name="image"
                    placeholder="The post image" />
            </div>

            <div className="flex flex-col gap-[10px]">
                <label
                    className="font-medium"
                    htmlFor="text">Text
                </label>
                <input className="border border-black bg-[#cde5ed] rounded px-3 py-2"
                    type="text"
                    name="text"
                    id="text"
                    placeholder="The post text" />
            </div>

            <div className="flex justify-between items-center mt-4">
                <a className="no-underline text-black font-medium"
                    href='#'
                    onClick={handleCancelClick}>Cancel
                </a>
                <button
                    className="text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2" type="submit">Create
                </button>
            </div> 

        </form>
    
    </div>
}