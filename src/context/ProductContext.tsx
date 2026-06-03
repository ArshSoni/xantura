import { createContext, useContext } from 'react';

import type { SortType } from '../components/Filters';

export interface State {
  selectedProductId: number | null;
  searchTerm: string;
  sortOrder: SortType | '';
}

export type ProductContextType = {
  state: State;
  setSearchTerm: (value: string) => void;
  setSortOrder: (value: SortType | '') => void;
  setSelectedProductId: (value: number | null) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export function useProductContext() {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error('ProductContext must be used within ProductProvider');
  }
  return ctx;

}