import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--element);
    border-radius: 0.25rem;
    max-width: 900px;    
    padding: 1rem;
    margin: 0 auto;
    display: block;
    margin-top: -9rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;    
    input { 
        max-width: 100%;   
        padding: 1.5rem;
        height: 4rem;
        border: 1px solid var(--pink);
        margin-bottom: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-color);
    }

    &::placeholder {
        color: var(--text-color);
    }

    button[type="submit"] {
        width: 100%;        
        color: var(--text-color);
        background-color: var(--button-color);
        border-radius: 0.25rem;
        height: 4rem;
        font-size: 1.5rem;
        border: 0;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
    
`;