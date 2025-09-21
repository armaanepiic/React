import { useCallback, useEffect, useMemo, useState } from "react";
import { productServices } from "../api/services";

export default function useProducs() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const products = await productServices.getProduct();
      setProducts(products);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // return result
  const getProductByName = useCallback(
    (name) => {
      if (!name.trim()) return "Enter a search term";

      try {
        // Create a regex pattern that's case-insensitive and allows partial matches
        const regexPattern = new RegExp(name, "i");
        const product = products.find((product) =>
          regexPattern.test(product.name)
        );
        return product ? product.name : "Product not found";
      } catch {
        // If regex is invalid, fall back to simple string matching
        const product = products.find((product) =>
          product.name.toLowerCase().includes(name.toLowerCase())
        );
        return product ? product.name : "Product not found";
      }
    },
    [products]
  );

  // event handling
  const handleProductSearch = useCallback((e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, []);

  // total price calculation
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);
  return {
    products,
    search,
    isLoading,
    error,
    getProductByName,
    totalPrice,
    handleProductSearch,
  };
}
