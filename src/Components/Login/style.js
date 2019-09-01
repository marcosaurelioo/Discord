import styled from 'styled-components';

export const FluxComponent = styled.div`
    outline: none;
    display: flex;
    justify-content: center;
    position: relative;
    top: 110px;
`;

export const FluxInput = styled.input`
    width: 450px;
    height: 33px;
    border: none;
    margin: 10px;
    border-radius: 20px;
    outline: none;
    opacity: 0.8;
    padding: 5px;
    
   @media screen and (max-width: 848px) {
    width: 350px;
   }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;