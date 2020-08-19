import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from './CartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.id;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, []);

  return <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ₺{item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
    
      <button className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default CartScreen;