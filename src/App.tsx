import React from 'react';
import Styled from 'styled-components';
const Container = Styled.div`
  min-height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  
`;

const Contents = Styled.div`
  display:flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`;

const Button = Styled.div`
  text-align:center;
  background-color:#304FFE;
  padding: 10px 20px;
  border-radius:8px;
  cursor: pointer;
  &:hover{
    background-color: #1E40FF;
  }
  &:active{
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <Contents>
        <Button>
          <Label>추가</Label>
        </Button>
      </Contents>
    </Container>
  );
};

export default App;
