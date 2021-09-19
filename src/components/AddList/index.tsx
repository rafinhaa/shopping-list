import { useState } from 'react';
import { Container, Content } from './styles';

interface ProductProps {
    onAddProduct: (pro: Product) => void;
}

interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
  }

export function AddList({onAddProduct}: ProductProps) {
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
     
    function handleAddProduct() {
        const newProduct = {
            id: Math.round(Math.random() * Number.MAX_SAFE_INTEGER),
            name: productName,
            price: price,
            amount: amount,
        };
        onAddProduct(newProduct);       
    }

    return (
        <Container>
            <Content>
                <input onChange={(e) => setProductName(e.target.value)} type="text" placeholder="Produto"/>
                <input onChange={(e) => setAmount(e.target.valueAsNumber)} type="number" placeholder="Quantidade"/>
                <input onChange={(e) => setPrice(e.target.valueAsNumber)} type="number" placeholder="Valor"/>
                <button onClick={handleAddProduct} type="submit">Adicionar</button>
            </Content>
        </Container>
    );
}