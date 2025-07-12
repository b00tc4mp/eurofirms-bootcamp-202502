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
        {isAdmin ||
          (isProvider && (
            <div className="flex flex-col items-center mt-8 px-4 ">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => navigate("/addProduct")}
              >
                Add Product
              </button>
            </div>
          ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onReloadProvider={handleUpadateProducts}
              onEditedProduct={handleUpadateProducts}
            />
          ))}
          {!products.length && <p>No hay productos que mostrar</p>}
        </div>
      </div>
    </>
  );
};
