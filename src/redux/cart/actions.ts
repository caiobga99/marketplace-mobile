import { Cars } from "../../data/cars";
import CartActionTypes from "./action-types";

export const addProductToCart = (payload: Cars) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductToCart = (payload: Cars) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const removeAllProductsToCart = (payload: Cars) => ({
  type: CartActionTypes.REMOVE_ALL_PRODUCTS,
  payload,
});