
export const Product = ({product})=>{
    return (
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg border border-gray-300"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.provider.name}</p>
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
              <span className="font-semibold">Created:</span> 
              {new Date(product.dateCreation).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Modified:</span> 
              {new Date(product.dateModification).toLocaleString()}
            </p>
          </div>
      
          {/* Botones comentados por ahora */}
          {/* <div className="mt-4 space-y-2">
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              onClick={() => setEditProvider(true)}
            >
              Update Provider
            </button>
            <button
              onClick={handleDeleteClick}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Delete Provider
            </button>
          </div> */}
        </div>
      );
    }      