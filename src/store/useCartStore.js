import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      carts: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.carts.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              carts: state.carts.map((item) => item.id === product.id)
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            };
          }
          return { carts: [...state.carts, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" }
  )
);
