// src/components/ProductsListPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Cámara Digital',
    description: 'Captura tus momentos especiales con esta cámara de alta resolución.',
    price: '$299.99',
    image: 'https://via.placeholder.com/400', // Reemplaza con la URL de tu imagen
  },
  {
    id: 2,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido de alta calidad y cancelación de ruido.',
    price: '$149.99',
    image: 'https://via.placeholder.com/400', // Reemplaza con la URL de tu imagen
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Smartphone con pantalla de alta definición y gran capacidad de almacenamiento.',
    price: '$699.99',
    image: 'https://via.placeholder.com/400', // Reemplaza con la URL de tu imagen
  },
  {
    id: 4,
    name: 'Reloj Inteligente',
    description: 'Reloj inteligente con múltiples funciones para tu estilo de vida activo.',
    price: '$199.99',
    image: 'https://via.placeholder.com/400', // Reemplaza con la URL de tu imagen
  },
];

const ProductsListPage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-8">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-xl font-semibold mb-4">{product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
