import { Content } from '../Content';
import { Header } from '../Header';
import * as C from './styles';

export function Container() {


  return (
    <C.Container>
      <C.CardContainer>
        <Header />
        <Content
          left={'true'}
          middle={'true'}
          right={'true'}
        />
      </C.CardContainer>
    </C.Container>
  )
}