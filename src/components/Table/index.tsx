import { Container } from './styles';

export function Table(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>1</td>
                        <td>R$ 3,00</td>
                    </tr>
                </tbody>
            </table> 
        </Container>
    );
}