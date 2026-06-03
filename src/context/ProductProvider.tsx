import { useState } from 'react';
import { ProductContext, type State } from './ProductContext';
import type { SortType } from '../components/Filters';
import { useProducts } from '../hooks/useProducts';

interface ProviderType {
  children: React.ReactNode
}

const initialState: State = {
  selectedProductId: null,
  searchTerm: '',
  sortOrder: '',
};

export function ProductProvider({ children }: ProviderType) {
  const [state, setState] = useState<State>(initialState);

  const { products, error, loading } = useProducts();

  const setSearchTerm = (value: string) => {
    setState(prev => ({ ...prev, searchTerm: value }));
  };

  const setSortOrder = (value: SortType | '') => {
    setState(prev => ({ ...prev, sortOrder: value }));
  };

  const setSelectedProductId = (value: number | null) => {
    setState(prev => ({ ...prev, selectedProductId: value }));
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        products,
        productsError: error,
        productsLoading: loading,
        setSearchTerm,
        setSortOrder,
        setSelectedProductId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}