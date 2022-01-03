import { useDispatch } from 'react-redux';
import { toggleProduct } from '../../store/reducers/Products/actions';
import { ShoppingList } from '../ShoppingList';
import { StaticData } from '../StaticData';
import * as C from './styles';

export const Content = () => {
  const dispatch = useDispatch()

  const handleChecked = (id) => {
    dispatch(toggleProduct(id))
  }

  return (
    <C.Container>

      <ShoppingList
        title="Produtos Disponíveis"
        handleChecked={handleChecked}
      />

      <ShoppingList
        title="Sua lista de compras"
        handleChecked={handleChecked}
        selected
      />

      <StaticData />

    </C.Container>
  )
}