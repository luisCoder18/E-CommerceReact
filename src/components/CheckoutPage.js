import React from 'react';

const CheckoutPage = () => {
  // Aquí puedes agregar lógica para el proceso de pago

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Pago</h1>
      <p className="text-xl mb-6">Ingresa tu información para completar la compra.</p>
      <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Nombre:</label>
          <input type="text" id="name" className="w-full p-2 bg-gray-700 text-white rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" className="w-full p-2 bg-gray-700 text-white rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="address">Dirección:</label>
          <input type="text" id="address" className="w-full p-2 bg-gray-700 text-white rounded-lg" required />
        </div>
        <button type="submit" className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
