import { logic } from "../logic";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from "../context/context";
import { Product } from "./components/Product";
import { useRole } from "../hooks/useRole";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { alert } = useContext();
  const { isAdmin, isProvider } = useRole();

  useEffect(() => {
    try {
      logic
        .getProducts()
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          alert(error.message);
        });
      console.log(products);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, []);

  const handleUpadateProducts = () => {
    try {
      logic
        .getProducts()
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Productos disponibles</h1>

        {(isAdmin || isProvider) && (
          <div className="mb-8">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition duration-300"
              onClick={() => navigate("/addProduct")}
            >
              <span className="text-xl">➕</span>
              Añadir producto
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onReloadProvider={handleUpadateProducts}
              onEditedProduct={handleUpadateProducts}
            />
          ))}

          {!products.length && (
            <div className="col-span-full text-center mt-8 text-gray-500 text-lg">🛒 No hay productos que mostrar</div>
          )}
        </div>
      </div>
    </>
  );
};
