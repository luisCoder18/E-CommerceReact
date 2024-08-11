import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';
import BannerSlider from './BannerSlider';

const allProducts = [
  {
    id: 1,
    name: 'Cámara Digital',
    description: 'Captura tus momentos especiales con esta cámara de alta resolución.',
    price: '$299.99',
    image: '/producto1.jpg',
  },
  {
    id: 2,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido de alta calidad y cancelación de ruido.',
    price: '$149.99',
    image: '/producto1.jpg',
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Smartphone con pantalla de alta definición y gran capacidad de almacenamiento.',
    price: '$699.99',
    image: '/producto1.jpg',
  },
  {
    id: 4,
    name: 'Reloj Inteligente',
    description: 'Reloj inteligente con múltiples funciones para tu estilo de vida activo.',
    price: '$199.99',
    image: '/producto1.jpg',
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen pt-20"> 
      
      <BannerSlider />
      
      <section className="bg-yellow-500 text-black p-4 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold">¡Oferta por Tiempo Limitado!</h2>
        <p className="text-lg">Obtén un 20% de descuento en tu primera compra. Usa el código: <strong>FIRST20</strong></p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Electrónica</h3>
          <p>Últimos gadgets y dispositivos.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Ropa</h3>
          <p>Moda y prendas actuales.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Hogar y Cocina</h3>
          <p>Todo para tu hogar.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Deportes</h3>
          <p>Equipo y accesorios para entusiastas del deporte.</p>
        </div>
      </section>
      
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <div className="flex justify-between">
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                Ver Más
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-gray-800 text-white p-6 rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">Lo Que Dicen Nuestros Clientes</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p className="text-lg italic">"¡La mejor experiencia de compra en línea que he tenido! Envío rápido y excelente servicio al cliente."</p>
          <footer className="mt-2">— Jane Doe</footer>
        </blockquote>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Oferta del Día</h3>
          <p>¡Ahorra un 30% en artículos seleccionados!</p>
        </div>
        <div className="bg-green-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Compra 1, Llévate 2</h3>
          <p>Compra uno y recibe otro gratis en todos los productos seleccionados.</p>
        </div>
        <div className="bg-red-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
          <p>Envío gratuito en compras mayores a $50.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
