import useProducts from "../hooks/useProducts";
import useTheme from "../hooks/useTheme";
import clsx from "clsx";

export default function ProductManagement() {
  const { theme } = useTheme();
  const { search, isLoading, error, products, getProductByName, totalPrice, handleProductSearch } = useProducts();

  return (
    <div
      className={clsx(
        "min-h-screen p-6 transition-colors duration-300 w-full mx-auto",
        theme === "light" && "bg-gray-50",
        theme === "dark" && "bg-gray-900"
      )}
    >
      <h1
        className={clsx(
          "text-3xl font-bold mb-8 text-center transition-colors duration-300",
          theme === "light" && "text-gray-800",
          theme === "dark" && "text-white"
        )}
      >
        Product Management
      </h1>

      {/* Search Section */}
      <div
        className={clsx(
          "mb-6 p-4 rounded-lg border transition-colors duration-300",
          theme === "light" && "bg-white border-gray-200 shadow-sm",
          theme === "dark" && "bg-gray-800 border-gray-600"
        )}
      >
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className={clsx(
                "h-5 w-5 transition-colors duration-300",
                theme === "light" && "text-gray-400",
                theme === "dark" && "text-gray-500"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products with regex (e.g., ^A.*phone$)..."
            onChange={handleProductSearch}
            className={clsx(
              "w-full pl-10 pr-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              theme === "light" &&
                "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white",
              theme === "dark" &&
                "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600"
            )}
          />
        </div>

        {/* Search Result */}
        <div
          className={clsx(
            "p-3 rounded-lg border transition-colors duration-300",
            theme === "light" && "bg-blue-50 border-blue-200",
            theme === "dark" && "bg-blue-900 border-blue-700"
          )}
        >
          <span
            className={clsx(
              "text-sm font-medium transition-colors duration-300",
              theme === "light" && "text-blue-800",
              theme === "dark" && "text-blue-200"
            )}
          >
            Searched Product:
          </span>
          <span
            className={clsx(
              "text-sm font-bold ml-2 transition-colors duration-300",
              theme === "light" && "text-blue-900",
              theme === "dark" && "text-blue-100"
            )}
          >
            {getProductByName(search)}
          </span>
        </div>
      </div>

      {isLoading && <div className="text-center py-4">Loading...</div>}
      {error && <div className="text-center py-4 text-red-500">{error}</div>}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={clsx(
              "p-6 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer",
              theme === "light" &&
                "bg-gray-100 hover:bg-gray-200 hover:border-black border-gray-200 shadow-md hover:shadow-lg",
              theme === "dark" &&
                "bg-gray-800 hover:bg-gray-700 hover:border-gray-200 border-gray-600 shadow-lg hover:shadow-xl"
            )}
          >
            <h3
              className={clsx(
                "text-lg font-semibold mb-3 transition-colors duration-300",
                theme === "light" && "text-gray-800",
                theme === "dark" && "text-white"
              )}
            >
              {product.name}
            </h3>
            {product.price && (
              <div className="flex items-center justify-between">
                <span
                  className={clsx(
                    "text-xl font-bold transition-colors duration-300",
                    theme === "light" && "text-green-600",
                    theme === "dark" && "text-green-400"
                  )}
                >
                  ${product.price}
                </span>
                <div
                  className={clsx(
                    "px-2 py-1 rounded text-xs font-medium transition-colors duration-300",
                    theme === "light" && "bg-green-100 text-green-800",
                    theme === "dark" && "bg-green-900 text-green-200"
                  )}
                >
                  In Stock
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div
        className={clsx(
          "p-3 rounded-lg text-center transition-all duration-300",
          theme === "light" &&
            "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg",
          theme === "dark" &&
            "bg-gradient-to-r from-amber-600 to-orange-700 text-white shadow-xl"
        )}
      >
        <div className="text-sm font-medium mb-1 opacity-90">
          Total Value of All Products
        </div>
        <div className="text-3xl font-bold">${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}
