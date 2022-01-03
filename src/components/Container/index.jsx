import { Content } from '../Content';
import { Header } from '../Header';

import * as C from './styles';

export function Container() {
  return (
    <C.Container>
      <C.CardContainer>
        <Header />
        <Content />
      </C.CardContainer>
    </C.Container>
  )
}