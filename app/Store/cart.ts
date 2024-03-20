import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      items: [], // Array to store cart items
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
    }),
    {
      name: 'cart-storage', // Unique name for the storage
      getStorage: () => localStorage, // Or sessionStorage for session-based persistence
    }
  )
);

export default useCartStore;
