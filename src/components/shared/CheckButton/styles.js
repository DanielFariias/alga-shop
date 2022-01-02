import styled from 'styled-components';

export const Container = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  cursor: default;
`;

export const Indicator = styled.span`
  height: 14px;
  width: 14px;

  margin-right: 8px;

  
  background-color: ${props => props.checked ? "#004D61" : "#fff"};
  border: 2px solid #004D61;
  border-radius: 7px;
  
  cursor: pointer;
`