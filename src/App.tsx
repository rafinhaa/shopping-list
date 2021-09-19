import { useState } from "react";
import { AddList } from "./components/AddList";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { GlobalStyle } from "./styles/globals";

interface Products {
  id: number;
  name: string;
  price: number;
  amount: number;
}

function App() { 
  const [products, setProducts] = useState<Products[]>([]);

  function onAddProduct(product: Products) {
    setProducts([...products, product]);
  }

  function handleRemoveTask(id: number) {
    const index = products.findIndex(products => products.id === id);
    products.splice(index,1);
    setProducts([...products]);
  }

  return (
    <>      
      <Header/>
      <AddList onAddProduct={onAddProduct} />
      <Table products={products} removeItem={handleRemoveTask} />
      <GlobalStyle />
    </>
  );
}

export default App;
