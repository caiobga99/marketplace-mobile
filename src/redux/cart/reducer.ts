import CartActionTypes from "./action-types";
import { Cars } from "../../data/cars";

interface IinitialState {
  products: Cars[];
  productsTotalPrice: number;
}

const initialState: IinitialState = {
  products: [],
  productsTotalPrice: 0,
};

interface IAction {
  type: string;
  payload: Cars;
}

const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      action.payload.isLiked = true;
      const productIsAlreadyInCart: boolean = state.products.some(
        (product: Cars) => product.id === action.payload.id
      );

      if (productIsAlreadyInCart) {
        action.payload.isLiked = false;
        return {
          ...state,
          products: state.products.filter(
            (product: Cars) => product.id !== action.payload.id
          ),
          productsTotalPrice:
            state.productsTotalPrice - parseFloat(action.payload.price),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
        productsTotalPrice:
          state.productsTotalPrice + parseFloat(action.payload.price),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product: Cars) => product.id !== action.payload.id
        ),
        productsTotalPrice:
          state.productsTotalPrice - parseFloat(action.payload.price),
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
