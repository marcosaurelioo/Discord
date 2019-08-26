import styled from 'styled-components';

export const VerticalBar = styled.div`
   background-color: #23272A;
   height: 100vh;
   width: 65px;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 848px) {
      display: none;
   }
`;

export const Main = styled.div`
 display: flex;
`;

export const ChannelsBar = styled.div`
   height: 100vh;
   width: 240px;
   background:#2C2F33;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   @media screen and (max-width: 848px) {
      display: none;
   }
`;

export const Channels = styled.div`
   display: flex;
   flex-direction:column;  
   cursor: pointer;
   margin-left: 12px;
   margin: 19px;
   
`;

export const UserSettingsContainer = styled.div`
  width: 100%;
  background:  rgb(32, 34, 36);
  height: 70px;
  display: flex;
`;

export const ChatBar = styled.div`
   background: #23272A;
   height: 61px;
   width: 100%;
   box-shadow: 12px solid rgb(32, 34, 36);
`;

export const Conversation = styled.div`
   background: rgb(54, 56, 62);
   height: 80vh;
   overflow: auto;
   ::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 16px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 16px rgba(0,0,0,0.5); 
}
`


