import { create } from 'zustand'
import type { Store } from '../types/Store'

export const useFoodStore = create<Store>((set) => ({
  product: null,
  setProduct: (p) => set(() => ({ product: { ...p, weight: null } })),
  setWeight: (w) =>
    set((state) =>
      state.product
        ? { product: { ...state.product, weight: w } }
        : { product: null }
    ),
  reset: () => set({ product: null }),
}))