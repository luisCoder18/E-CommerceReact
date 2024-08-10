import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">E-Commerce</Link>
        </div>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-300">Home</Link>
          <Link to="/products" className="mx-4 hover:text-gray-300">Products</Link>
          <Link to="/cart" className="mx-4 hover:text-gray-300">Cart</Link>
          <Link to="/checkout" className="mx-4 hover:text-gray-300">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
