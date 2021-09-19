import { Container } from './styles';

interface TableProps {
    products: {
        id: number;
        name: string;
        price: number;
        amount: number;
    }[];
    removeItem (id: number): void;
}

export function Table({products, removeItem}: TableProps){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor UN</th>
                        <th>Total</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => 
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.amount}</td>
                                <td>R$ {product.price}</td>
                                <td>R$ {product.price * product.amount}</td>
                                <td>
                                    <button type="button" onClick={() => removeItem(product.id)} >
                                        X
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table> 
        </Container>
    );
}