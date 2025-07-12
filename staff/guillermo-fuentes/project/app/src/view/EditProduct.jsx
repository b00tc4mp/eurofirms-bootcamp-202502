import { logic } from "../logic";
import { useState } from "react";
import { useRole } from "../hooks/useRole";
import { SearchProviders } from "./components/SearchProviders";
import { useContext } from "../context/context";

export const EditProduct = ({ product, onEditedProduct }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [image, setImage] = useState(product.image);
  const [providerName, setProviderName] = useState(product.provider.name);
  const [selectedProviderId, setSelectedProviderId] = useState(product.provider.id);
  const [error, setError] = useState("");

  const { isAdmin } = useRole();

  const { alert } = useContext();

  const handleEditProduct = () => onEditedProduct();

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const stock = parseInt(form.stock.value);
    const image = form.image.value;

    if (isAdmin && !selectedProviderId) {
      setError("Please select a provider");
      alert("Please select a provider");
      return;
    }

    try {
      logic
        .updateProduct(product.id, name, description, price, stock, image, selectedProviderId)
        .then(() => {
          form.reset();
          setError("");
          handleEditProduct();
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center  bg-opacity-25
     px-4 fixed inset-0  z-10"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6 text-4xl text-blue-500">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update product</h1>
        <form className="space-y-4" onSubmit={handleEditSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="El nombre de tu producto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="La descripcion de tu producto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="El precio de el produto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
              placeholder="El stock de el produto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image Url
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="El stock de el produto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="userFullName" className="block text-sm font-medium text-gray-700 mb-1">
              Provider name
            </label>
            <input
              type="text"
              name="userFullName"
              id="userFullName"
              value={providerName}
              onChange={(event) => setProviderName(event.target.value)}
              placeholder="El nombre de el proveedor"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              readOnly
            />
          </div>
          {isAdmin && <SearchProviders onSelectProviderId={setSelectedProviderId} setError={setError} />}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between gap-2 pt-2">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            >
              Update product
            </button>

            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
              onClick={() => handleEditProduct()}
            >
              Cancel update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
