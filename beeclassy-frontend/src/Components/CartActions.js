import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM} from "./CartConstant";

const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/v1/product/" + productId);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data.id,
        name: data.name,
        image: data.imageUrl,
        price: data.price
      }
    });
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {

  }
}
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeFromCart}