import productsMock from '../../../mocks/productsList.json'

const INITIAL_STATE = productsMock.products

export const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'TOGGLE_PRODUCT': {
      return state.map(product =>
        product.id === action.payload
          ? { ...product, checked: !product.checked }
          : product
      )
    }

    default: {
      return state
    }
  }
}