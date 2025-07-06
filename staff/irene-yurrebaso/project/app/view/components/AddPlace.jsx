import { logic } from '../../logic'
import { useContext } from '../../context'

export const AddPlace = () => {
    //const { alert } = useContext()

    console.log('AddPlace -> render')

    return <div>
        <h1>Add a place</h1>
        <form>
            <h2>Location details</h2>
            <h2>Contact details</h2>
            <h2>Description</h2>
            <h2>Photo</h2>
            <div>
                <a className="">Cancel</a>
                <button className="" type="submit">Add</button>
            </div>
        </form>
    </div>
}