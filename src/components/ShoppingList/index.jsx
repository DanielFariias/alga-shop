import { useSelector } from 'react-redux';

import { CheckButton } from '../shared/CheckButton';

import * as C from './styles';

export function ShoppingList({ title, handleChecked, selected }) {
  const products = useSelector(state =>
    selected
      ? state.products.filter(product => product.checked)
      : state.products
  )

  return (
    <C.Container>
      <C.Title> {title}: </C.Title>
      <C.List>
        {
          products.map(product =>
            <CheckButton
              key={product.id}
              checked={product.checked}
              title={product.name}
              onClick={() => handleChecked(product.id, product.checked)}
            />
          )
        }
      </C.List>
    </C.Container>
  )
}