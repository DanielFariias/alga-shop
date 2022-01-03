import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { extractPercentage } from '../../utils/extractPercentage';
import { LineChart } from '../shared/LineChart';
import * as C from './styles';

export function StaticData() {
  const selectedProducts = useSelector(state =>
    state.products.filter(product => product.checked)
  )

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = selectedProducts
      .reduce((sum, product) => sum + product.price, 0)

    setTotalPrice(total)
  }, [selectedProducts])

  return (
    <C.Container>
      <C.Title> Estatísticas: </C.Title>
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
    </C.Container>
  )
}