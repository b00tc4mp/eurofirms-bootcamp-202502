import { logic } from '../../logic'
import { useContext } from '../../context'

import { useState } from 'react'

export const CreatePlace = ({ onCancelClicked, onPlaceCreated }) => {
    const { alert } = useContext()

    const handleCancelClick = () => onCancelClicked()

    //useState for controlled radio inputs in React
    const [selectedCategory, setSelectedCategory] = useState('')

    //funcion para manejar cambios en radio inputs con useState
    const handleCategoryChange = (event) => {
        setSelectedCategory((event.target.value))
        //event: objeto event del navegador q se pasa al ejecutar la funcion, al hacer clic en radio button.
        //target: elemento HTML q disparó el evento, ej. input type=radio
        //value: valor del input seleccionado
    }

    //manejo del envio del formulario
    const handleCreatePlaceSubmit = event => {
        event.preventDefault()

        const form = event.target

        //traemos los input del formulario
        const name = form.name.value
        const category = form.category.value
        const description = form.description.value
        const address = form.address.value
        const city = form.city.value
        const country = form.country.value
        const website = form.website.value
        const telephone = form.telephone.value
        const image = form.image.value

        try {
            logic.createPlace(name, category, country, city, address, website, telephone, description, image)
                .then(() => {
                    form.reset()

                    onPlaceCreated()
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

    console.log('CreatePlace -> render')

    return <div>
        <h1 className="text-xl font-semibold my-4">Add a place</h1>
        <form className="flex flex-col gap-5" onSubmit={handleCreatePlaceSubmit}>
            <div className="flex flex-col gap-3">
                <h2 className="text-lg">1. Location details</h2>
                <div className="flex flex-col gap-5">
                    <label className="font-semibold" htmlFor="name">Name *</label>
                    <input className="border-2 border-solid p-1" type="text" id="name" name="name" placeholder="The place name" />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold" htmlFor="category">Which category best describes this place? *</h3>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="hotels"
                            checked={selectedCategory === 'hotels'} //checked: se necesita para q React sepa q input tiene q marcar visualmente en el DOM como seleccionado, basándose en el estado.
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="hotels">Hotels</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="restaurants"
                            checked={selectedCategory === 'restaurants'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="restaurants">Restaurants</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="outdoors"
                            checked={selectedCategory === 'outdoors'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="outdoors">Outdoors</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="museums"
                            checked={selectedCategory === 'museums'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="museums">Museums</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="shops"
                            checked={selectedCategory === 'shops'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="shops">Shops</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="sports"
                            checked={selectedCategory === 'sports'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="sports">Sports</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="transport"
                            checked={selectedCategory === 'transport'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="transport">Transport</label>
                    </div>
                    <div>
                        <input
                            className="mr-2"
                            type="radio"
                            name="category"
                            value="other"
                            checked={selectedCategory === 'other'}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor="other">Other things</label>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="font-semibold">Description *</label>
                        <textarea className="border-2 border-solid p-1" id="description" name="description" rows="5" cols="33" placeholder="Brief description of the place and what makes it a great autistic-friendly option."></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="address">Address *</label>
                        <input className="border-2 border-solid p-1" type="text" id="address" name="address" placeholder="The place address" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="city">City/Town *</label>
                        <input className="border-2 border-solid p-1" type="text" id="city" name="city" placeholder="The place city" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="country">Country *</label>
                        <input className="border-2 border-solid p-1" type="text" id="country" name="country" placeholder="The place country" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-lg">2. Contact details</h2>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold" htmlFor="website">Website *</label>
                    <input className="border-2 border-solid p-1" type="text" id="website" name="website" placeholder="The place website" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold" htmlFor="telephone">Official phone *</label>
                    <input className="border-2 border-solid p-1" type="text" id="telephone" name="telephone" placeholder="The place telephone" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-lg">3. Photographs</h2>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold" htmlFor="image">Photo link *</label>
                    <input className="border-2 border-solid p-1" type="text" id="image" name="image" placeholder="Photo link" />
                </div>
            </div>
            <div className="flex justify-between pt-8">
                <a className="underline text-blue-600" href="#" onClick={handleCancelClick}>Cancel</a>
                <button className="bg-rose-800 text-white py-2 px-4 cursor-pointer" type="submit">Submit</button>
            </div>
        </form>
    </div>
}