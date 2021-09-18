import { Container, Content } from './styles';

export function AddList(){
    return (
        <Container>
            <Content>
                <input type="text" placeholder="Produto"/>
                <input type="number" placeholder="Quantidade"/>
                <input type="number" placeholder="Valor"/>
                <button type="submit">Adicionar</button>
            </Content>
        </Container>
    );
}