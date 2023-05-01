interface ICartActionTypes {
  ADD_PRODUCT: string;
  REMOVE_PRODUCT: string;
  REMOVE_ALL_PRODUCTS: string;
}

const CartActionTypes: ICartActionTypes = {
  ADD_PRODUCT: "cart/addProduct",
  REMOVE_PRODUCT: "cart/removeProduct",
  REMOVE_ALL_PRODUCTS: "cart/removeAllProducts",
};

export default CartActionTypes;
