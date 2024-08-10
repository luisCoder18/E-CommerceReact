// src/components/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white p-2 rounded-lg mb-4 hover:bg-red-600"
          >
            Vaciar Carrito
          </button>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-lg mb-2">{item.description}</p>
                <p className="text-xl font-semibold mb-2">{item.price}</p>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
