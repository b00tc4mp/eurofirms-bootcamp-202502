import { useState } from "react";
import { logic } from "../logic";
import { useNavigate } from "react-router";
import { SearchProviders } from "./components/SearchProviders";

export const AddProduct = () => {
  const navigate = useNavigate();

  const [selectedProviderId, setSelectedProviderId] = useState("");
  const [error, setError] = useState("");

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const stock = parseInt(form.stock.value);
    const image = form.image.value;

    if (!selectedProviderId) {
      const msg = "Please select provider";
      setError(msg);
      return;
    }

    logic
      .addProduct(name, description, price, stock, image, selectedProviderId)
      .then(() => {
        form.reset();
        setSelectedProviderId("");
        setError("");
        navigate("/products");
      })
      .catch((error) => {
        const msg = error.message || "Error creating product";
        setError(msg);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6 text-4xl text-blue-500">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Product</h1>
        <form className="space-y-4" onSubmit={handleRegisterSubmit}>
          <SearchProviders onSelectProviderId={setSelectedProviderId} setError={setError} />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insert name product"
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
              placeholder="Insert description product"
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
              placeholder="Price product"
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
              placeholder="Product stock"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Product image url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-between gap-2 pt-2">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
              disabled={!selectedProviderId}
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
