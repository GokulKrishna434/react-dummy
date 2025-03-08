import React from 'react';
import RestaurantItemCard from './RestaurantItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 m-4">
      <div className="mx-auto w-6/12 bg-gray-100 p-3 rounded-lg">
        {cartItems.length > 0 && (
          <button
            className="bg-red-500 px-3 text-white rounded cursor-pointer float-end"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        )}
        <h1 className="text-center text-xl font-bold mb-3">Cart</h1>

        {cartItems.length === 0 && (
          <p className="text-center mb-3">No items added</p>
        )}
        {cartItems.map((item, index) => (
          <RestaurantItemCard key={`cart-${item?.id}-${index}`} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
