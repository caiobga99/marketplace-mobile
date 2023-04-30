import CartActionTypes from "./action-types";

const initialState: any = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product: any) => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.filter(
            (product: any) => product.id !== action.payload.id
          ),
          productsTotalPrice: (
            parseInt(state.productsTotalPrice) -
              parseInt(action.payload.price)
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
        productsTotalPrice: (
          parseFloat(state.productsTotalPrice) +
            parseFloat(action.payload.price)
        ),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product: any) => product.id !== action.payload.id
        ),
        productsTotalPrice: (
          parseFloat(state.productsTotalPrice) -
            parseFloat(action.payload.price)
        ),
      };

    case CartActionTypes.REMOVE_ALL_PRODUCTS:
      return {
        products: [],
        productsTotalPrice: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;