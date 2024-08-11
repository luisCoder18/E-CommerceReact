// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">E-Commerce</Link>
        </div>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-300">Inicio</Link>
          <Link to="/products" className="mx-4 hover:text-gray-300">Productos</Link>
          <Link to="/cart" className="mx-4 hover:text-gray-300">
            Carrito
            {cartItems.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-sm rounded-full px-2 py-1">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/checkout" className="mx-4 hover:text-gray-300">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
