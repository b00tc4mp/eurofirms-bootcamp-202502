import { logic } from '../../logic'
import { useContext } from '../../context'

export const CreatePost = ({ onCancelClicked, onPostCreated }) => {
    const { alert } = useContext()

    const handleCancelClick = () => onCancelClicked()

    const handleCreatePostSubmit = event => {
        event.preventDefault()

        const form = event.target
        const image = form.image.value
        const doctor = form.doctor.value
        const treatment = form.treatment.value
        const city = form.city.value
        const experience = form.experience.value

        try {
            logic.createPost(image, doctor, treatment, city, experience)
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

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">CREATE POST Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreatePostSubmit}>

            <div className="flex flex-col gap">

                <label htmlFor="image" className="text-xl">Image:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-50 py-1" type="text" id="image" image="image" placeholder="Please insert an image" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="text" className="text-xl">Doctor:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-50 py-1" type="text" name="text" id="doctor" placeholder="Add a Doctor's Name" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="text" className="text-xl">Treatment:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-50 py-1" type="text" name="text" id="treatment" placeholder="Add the Treatment which was done" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="text" className="text-xl">City:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-50 py-1" type="text" name="text" id="city" placeholder="Add the City" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="text" className="text-xl">Experience:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-50 py-1" type="text" name="text" id="experience" placeholder="What was your experience?" />

            </div>

            <div className="my-2 flex justify-between">

                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="border-1 rounded-md bg-blue-50 text-blue-900 px-2 cursor-pointer" type="submit">Create</button>

            </div>

        </form>

    </div>

}