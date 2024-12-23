import { create } from "zustand";
import { BookTypes } from "../types";

interface CartItem extends BookTypes {
  quantity: number;
}

interface CartStoreState {
  cart: CartItem[];
  addToCart: (book: BookTypes) => void;
}

const useCartStore = create<CartStoreState>((set) => ({
  cart: [],
  addToCart: (book) =>
    set((state) => {
      console.log(book);
      const existingItem = state.cart.find((item) => item.id === book.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...book, quantity: 1 }],
        };
      }
    }),
}));

export default useCartStore;
