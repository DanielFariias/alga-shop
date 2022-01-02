import { useEffect, useState } from 'react';

import { Content } from '../Content';
import { Header } from '../Header';
import { ShoppingList } from '../ShoppingList';

import productsMock from '../../mocks/productsList.json'

import * as C from './styles';

export function Container() {
  const [products, setProducts] = useState(productsMock.products)
  const [selectedProducts, setSelectedProducts] = useState([])

  useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked)

    setSelectedProducts(newSelectedProducts)
  }, [products])

  const handleChecked = (id, checked) => {
    const newProducts = products.map((product) => (
      product.id === id
        ? { ...product, checked: !product.checked }
        : product
    ))
    setProducts(newProducts)
  }

  return (
    <C.Container>
      <C.CardContainer>
        <Header />
        <Content
          left={<ShoppingList
            title="Produtos Disponíveis"
            list={products}
            handleChecked={handleChecked}
          />}
          middle={<ShoppingList
            title="Sua lista de compras"
            list={selectedProducts}
            handleChecked={handleChecked}

          />}
          right={'true'}
        />
      </C.CardContainer>
    </C.Container>
  )
}