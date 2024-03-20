// src/store/cartStore.js
import create from 'zustand';

const useCartStore = create((set) => ({
  items: [], // Array to store cart items
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId) => set((state) => ({ 
      items: state.items.filter((item) => item.id !== itemId),
  })),
}));

export default useCartStore;
