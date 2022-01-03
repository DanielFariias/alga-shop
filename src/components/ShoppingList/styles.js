import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.h2`
  color: #004D61;
  font-size: 18px;
  font-weight: 400;
  height: 32px;
`


export const List = styled.div`
  height: 424px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #006073;
}
`