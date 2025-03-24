import axios from 'axios'
import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      set({ products: response.data.products, loading: false });
    } catch (err) {
      set({
        error: "An error occured while fetching the products",
        loading: false,
      });
    }
  },
}));

export default useProductStore;
