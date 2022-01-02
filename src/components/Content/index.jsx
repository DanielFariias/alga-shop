import { CheckButton } from '../shared/CheckButton';
import { LineChart } from '../shared/LineChart';
import { ShoppingList } from '../ShoppingList';
import * as C from './styles';

export const Content = ({ left, right, middle }) => {
  return (
    <C.Container>
      <div>
        {left}
      </div>

      <div>{middle}</div>

      <div>
        <LineChart title={"Saudável"} percentage={10} color={"#62CBC6"} />
        <LineChart title={"Não tão saudável"} percentage={80} color={"#00ABAD"} />
        <LineChart title={"Limpeza"} percentage={40} color={"#00858C"} />
        <LineChart title={"Outros"} percentage={50} color={"#006073"} />
      </div>
    </C.Container>
  )
}