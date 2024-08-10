import React, { useState } from 'react';

const CheckoutPage = () => {
  const [notification, setNotification] = useState('');

  const handlePlaceOrder = () => {
    // Simular procesamiento de pedido
    setNotification('Order placed successfully!');
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-4">Checkout Page</h1>
      {notification && (
        <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
          {notification}
        </div>
      )}
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg" onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input type="text" className="w-full p-2 text-black rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full p-2 text-black rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Address</label>
          <input type="text" className="w-full p-2 text-black rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Credit Card Number</label>
          <input type="text" className="w-full p-2 text-black rounded-lg" />
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
