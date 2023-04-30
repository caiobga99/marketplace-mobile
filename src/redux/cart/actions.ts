import CartActionTypes from "./action-types";

export const addProductToCart = (payload: any) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToCart = (payload: any) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const removeAllProductsToCart = (payload: any) => ({
  type: CartActionTypes.REMOVE_ALL_PRODUCTS,
  payload,
});