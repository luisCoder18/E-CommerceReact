import React from 'react';

const CartPage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-5xl font-bold text-white mb-4">Cart Page</h1>
      <p className="text-xl text-gray-300 mb-8">Review your cart before proceeding to checkout.</p>

      {/* Simulated Cart Items */}
      <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Cart Item 1</h3>
        <p>$29.99</p>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Cart Item 2</h3>
        <p>$49.99</p>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Total</h3>
        <p>$79.98</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
