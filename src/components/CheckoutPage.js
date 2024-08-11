import React, { useState } from 'react';

const processPayment = async (paymentDetails) => {
  console.log('Processing payment with details:', paymentDetails);
  return new Promise((resolve) => setTimeout(() => resolve('Pago exitoso'), 1000));
};

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const result = await processPayment(formData);
      setMessage(result);
    } catch (error) {
      setMessage('Error processing payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Pago</h1>
      <p className="text-xl mb-6">Ingresa tu información para completar la compra.</p>
      <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isProcessing}
        >
          {isProcessing ? 'Procesando...' : 'Confirmar Compra'}
        </button>
      </form>
      {message && <p className="mt-4 text-xl">{message}</p>}
    </div>
  );
};

export default CheckoutPage;

