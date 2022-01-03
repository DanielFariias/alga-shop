import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleProduct } from '../../store/reducers/Products/actions';
import { extractPercentage } from '../../utils/extractPercentage';
import { LineChart } from '../shared/LineChart';
import { ShoppingList } from '../ShoppingList';
import { Content } from '../Content';
import { Header } from '../Header';

import * as C from './styles';

export function Container() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const selectedProducts = useSelector(state =>
    state.products.filter(product => product.checked)
  )
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = selectedProducts
      .reduce((sum, product) => sum + product.price, 0)

    setTotalPrice(total)
  }, [selectedProducts])

  const handleChecked = (id) => {
    dispatch(toggleProduct(id))
  }

  return (
    <C.Container>
      <C.CardContainer>
        <Header />
        <Content
          left={
            <ShoppingList
              title="Produtos Disponíveis"
              list={products}
              handleChecked={handleChecked}
            />
          }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              list={selectedProducts}
              handleChecked={handleChecked}
            />
          }
          right={
            <div>
              <LineChart
                title={"Saudável"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags.includes('healthy')).length
                )}
                color={"#62CBC6"}
              />
              <LineChart
                title={"Não tão saudável"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags.includes('junk')).length
                )}
                color={"#00ABAD"}
              />
              <LineChart
                title={"Limpeza"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags.includes('cleaning')).length
                )}
                color={"#00858C"}
              />
              <LineChart
                title={"Outros"}
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags.includes('others')).length
                )}
                color={"#006073"}
              />

              <div style={{ marginTop: 12 }}>
                <h2
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#00364A"
                  }}
                >
                  Previsão de gastos:
                  <div style={{ fontSize: 24 }}>{totalPrice.toLocaleString('pt-br', {
                    currency: 'BRL',
                    style: 'currency'
                  })}</div>
                </h2>
              </div>
            </div>
          }
        />
      </C.CardContainer>
    </C.Container>
  )
}