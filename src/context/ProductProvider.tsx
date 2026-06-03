import { useState } from 'react';
import { ProductContext, type State } from './ProductContext';
import type { SortType } from '../components/Filters';

const initialState: State = {
  selectedProductId: null,
  searchTerm: '',
  sortOrder: '',
};

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(initialState);

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
        setSearchTerm,
        setSortOrder,
        setSelectedProductId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}