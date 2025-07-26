import { useState } from "react";
import { logic } from "../../logic";
import { EditProduct } from "../EditProduct";
import { useContext } from "../../context/context";
// import { useLoggedIn } from "../../hooks/useLoggedIn";
// import { useRole } from "../../hooks/useRole";
import { data } from "../../data";
import { getPayloadFromToken } from "../../logic/helper/getPayloadFromToken";
export const Product = ({ product, onReloadProvider, onEditedProduct }) => {
  const [editProduct, setEditProduct] = useState(false);
  const { alert, confirm } = useContext();

  // const loggedIn = useLoggedIn();
  // const { isAdmin, isProvider } = useRole();

  const handleEditProduct = () => {
    setEditProduct(false);
    onReloadProvider();
  };
  const token = data.getToken();
  const userId = getPayloadFromToken(token);
  const handleDeleteClick = () => {
    confirm("Delete product?").then((result) => {
      if (result)
        try {
          logic
            .deleteProduct(userId.sub, product.id)
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
      <div className="max-w-sm w-full bg-white border border-gray-300 rounded-2xl shadow-md p-6 m-4 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.provider.name}</p>
          </div>
        </div>

        <div className="space-y-3 text-base text-gray-800">
          <p>
            <span className="font-semibold">Description:</span> {product.description}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-green-700 font-bold">${product.price}</span>
          </p>
          <p>
            <span className="font-semibold">Stock:</span>{" "}
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600 font-semibold"}>
              {product.stock > 0 ? product.stock : "Out of stock"}
            </span>
          </p>
          <p>
            <span className="font-semibold">Created:</span>{" "}
            {new Date(product.dateCreation).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            <span className="font-semibold">Modified:</span>{" "}
            {new Date(product.dateModification).getTime() === 0
              ? "Not modified"
              : new Date(product.dateModification).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white font-semibold py-3 rounded-lg transition duration-200"
            onClick={() => setEditProduct(true)}
          >
            Update Product
          </button>

          <button
            onClick={handleDeleteClick}
            className="w-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Delete Product
          </button>
        </div>

        {editProduct && <EditProduct product={product} onEditedProduct={handleEditProduct} />}
      </div>
    </>
  );
};
