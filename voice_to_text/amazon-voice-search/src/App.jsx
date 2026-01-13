import { useState } from 'react'
import VoiceSearch from "./components/VoiceSearch";
import ProductList from "./components/ProductList";
import { searchProducts } from "./api/productApi";
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    console.log("Searching for products app:", query); 
    const result = await searchProducts(query);
    setProducts(result.products || []);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Amazon Clone - Voice Search</h1>
      <VoiceSearch onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
