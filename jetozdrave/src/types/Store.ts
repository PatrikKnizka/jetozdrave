import type { Product } from "./Product"

export type Store = {
  product: Product | null
  setProduct: (p: Omit<Product, 'weight'>) => void
  setWeight: (w: number) => void
  reset: () => void
}