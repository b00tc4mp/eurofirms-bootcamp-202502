import { logic } from '../../logic'
import { useContext } from '../../context'

export const CreateProfile = ({ onCancelClicked, onProfileCreated }) => {
    const { alert } = useContext()

    const handleCancelClick = () => onCancelClicked()

    const handleCreateProfileSubmit = event => {
        event.preventDefault()

        const form = event.target

        const gender = form.gender.value
        const weight = Number(form.weight.value)
        const height = Number(form.height.value)

        try{
            logic.createProfile(gender, weight, height)
                .then(() => {
                    form.reset()

                    onProfileCreated()
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

    console.log('Crete Profile -> render')

    return <div className='mt-2'>
        <h1 className="text-[22px] font-bold text-[#119fd3] mb-4">Complete your profile</h1>

        <form className="flex flex-col gap-5" onSubmit={handleCreateProfileSubmit}>

            <div className="flex flex-col gap-[10px]">
                <span className="font-medium">Gender</span>
                <div className="flex gap-4">
                    <label>
                        <input type="radio" name="gender" value="male" className="mr-1" />Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" className="mr-1" />Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" className="mr-1" />Other
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label
                    className="font-medium"
                    htmlFor="weight">Weight
                </label>
                <input className="border border-black bg-[#cde5ed] rounded px-3 py-2"
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="Weight in kg"/>
            </div>

            <div className="flex flex-col gap-[10px]">
                <label
                    className="font-medium"
                    htmlFor="height">Height
                </label>
                <input className="border border-black bg-[#cde5ed] rounded px-3 py-2"
                    type="number"
                    name="height"
                    id="height"
                    placeholder="Height in cm" />
            </div>

            <div className="flex justify-between items-center mt-4">
                <a className="no-underline text-black font-medium"
                    href="#"
                    onClick={handleCancelClick}>Cancel
                </a>
                <button
                    className="text-white bg-[#0ab5dd] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2" type="submit">Create
                </button>
            </div>

        </form>
    </div>
}