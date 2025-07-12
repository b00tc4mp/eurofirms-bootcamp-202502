import { useState } from "react";
import { logic } from "../../logic";
import { EditProduct } from "../EditProduct";
import { useContext } from "../../context/context";
import { useLoggedIn } from "../../hooks/useLoggedIn";
import { useRole } from "../../hooks/useRole";
export const Product = ({ product, onReloadProvider, onEditedProduct }) => {
  const [editProduct, setEditProduct] = useState(false);
  const { alert, confirm } = useContext();

  const loggedIn = useLoggedIn();
  const { isAdmin, isProvider } = useRole();
  const handleEditProduct = () => {
    setEditProduct(false);
    onReloadProvider();
  };

  const handleDeleteClick = () => {
    confirm("Delete product?").then((result) => {
      if (result)
        try {
          logic
            .deleteProduct(product.id)
            .then(() => onEditedProduct())
            .catch((error) => {
              console.error(error);
              alert(error.message);
            });
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
    });
  };
  return (
    <>
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500"> {product.provider.name}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Description:</span> {product.description}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>
          <p>
            <span className="font-semibold">Created: </span>
            {new Date(product.dateCreation).toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Modified: </span>
            {new Date(product.dateModification).toLocaleString() === "1/1/1970, 1:00:00"
              ? "Not modified"
              : new Date(product.dateModification).toLocaleString()}
          </p>
        </div>
        {loggedIn ||
          isAdmin ||
          (isProvider && (
            <div className="mt-4 space-y-2">
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                onClick={() => setEditProduct(true)}
              >
                Update Product
              </button>
              <button
                onClick={handleDeleteClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Delete Product
              </button>
            </div>
          ))}
      </div>
      {editProduct && <EditProduct product={product} onEditedProduct={handleEditProduct} />}
    </>
  );
};
