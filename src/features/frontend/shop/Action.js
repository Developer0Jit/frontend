import ActionType from "../../frontend/shop/ActionType";
export const addToCart = id => {
    return {
      type: ActionType.ADD_TO_CART,
      id
    };
  };
  export const removeFromCart = id => {
    return {
      type: ActionType.REMOVE_FROM_CART,
      id,
    };
  };
  export const subtractQuantity = id => {
    return {
      type: ActionType.SUB_QUANTITY,
      id,
    };
  };
  export const addQuantity = id => {
    return {
      type: ActionType.ADD_QUANTITY,
      id,
    };
  };
  export const emptyCart = () => {
    return {
      type: ActionType.EMPTY_CART,
    };
  };