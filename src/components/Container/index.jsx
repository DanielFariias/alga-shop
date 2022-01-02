import { Header } from '../Header';
import * as C from './styles';

export function Container() {
  return (
    <C.Container>
      <C.CardContainer>
        <Header />
      </C.CardContainer>
    </C.Container>
  )
}