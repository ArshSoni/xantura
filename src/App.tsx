import './App.css'
import { ProductProvider } from './context/ProductProvider';

import Router from './router/Router';

function App() {
  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  )
}

export default App
