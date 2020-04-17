import styled from 'styled-components';

export const FluxComponent = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction:column;
    width: 100%; 
`;

export const FluxInput = styled.input`
    width: 30%;
    margin: 5px;
    height: 33px;
    border-radius: 20px;
    padding: 5px;
    align-self: center;
    border: none;
    @media screen and (max-width: 848px) {
      width: 80%;
    }
`;
