import { CheckButton } from '../shared/CheckButton';
import * as C from './styles';

export function ShoppingList({ title, list, handleChecked }) {
  return (
    <C.Container>
      <C.Title>
        {title}:
      </C.Title>
      <C.List>
        {
          list?.map(product => {
            return (
              <CheckButton
                key={product.id}
                checked={product.checked}
                title={product.name}
                onClick={() => handleChecked(product.id, product.checked)}
              />
            )
          })
        }
      </C.List>
    </C.Container>
  )
}