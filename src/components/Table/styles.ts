import styled  from 'styled-components';

export const Container = styled.main`     
    max-width: 900px;        
    margin: 0 auto;
    margin-top: 0.25rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            background-color: var(--element);            
            font-weight: 600;  
            color: var(--text-color);
        }
        td {            
            padding: 1rem 2rem;
            background: var(--element);
            font-weight: 400;        
            color: var(--text-color);

            button {
                background: transparent;
                border: 0;
                color: var(--text-color);
                font-size: 1.2rem;
                font-weight: 600;
                padding: 0rem 1rem;
                cursor: pointer;
            }
        }        
    }
`;