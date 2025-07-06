import { logic } from '../../logic'

import { useContext } from '../../context'

export const Place = ({ place }) => {
    const { alert } = useContext()

    console.log('Post -> render')

    return <article className="max-w-xs">
        <h3 className="font-semibold">{place.name}</h3>
        <h4 className="">{place.city}</h4>
        <img className=" py-2" src={place.image} alt=""></img>
        <p className="font-light">{place.description}</p>
        </article>
}