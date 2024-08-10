import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Cámara Digital',
    description: 'Captura tus momentos especiales con esta cámara de alta resolución.',
    price: '$299.99',
    image: 'https://via.placeholder.com/200', // Reemplaza con la URL de tu imagen
  },
  {
    id: 2,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido de alta calidad y cancelación de ruido.',
    price: '$149.99',
    image: 'https://via.placeholder.com/200', // Reemplaza con la URL de tu imagen
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Smartphone con pantalla de alta definición y gran capacidad de almacenamiento.',
    price: '$699.99',
    image: 'https://via.placeholder.com/200', // Reemplaza con la URL de tu imagen
  },
  {
    id: 4,
    name: 'Reloj Inteligente',
    description: 'Reloj inteligente con múltiples funciones para tu estilo de vida activo.',
    price: '$199.99',
    image: 'https://via.placeholder.com/200', // Reemplaza con la URL de tu imagen
  },
];

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Encabezado */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Página Principal</h1>
        <p className="text-xl text-gray-300">¡Bienvenido a nuestra tienda en línea!</p>
      </header>

      {/* Oferta Destacada */}
      <section className="bg-yellow-500 text-black p-4 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold">¡Oferta por Tiempo Limitado!</h2>
        <p className="text-lg">Obtén un 20% de descuento en tu primera compra. Usa el código: <strong>FIRST20</strong></p>
      </section>

      {/* Categorías Destacadas */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Electrónica</h3>
          <p>Últimos gadgets y dispositivos.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Ropa</h3>
          <p>Moda y prendas actuales.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Hogar y Cocina</h3>
          <p>Todo para tu hogar.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Deportes</h3>
          <p>Equipo y accesorios para entusiastas del deporte.</p>
        </div>
      </section>

      {/* Productos Recomendados */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <div className="flex justify-between">
              <Link to={`/products/${product.id}`} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">Ver Más</Link>
              <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonios */}
      <section className="bg-gray-800 text-white p-6 rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">Lo Que Dicen Nuestros Clientes</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p className="text-lg italic">"¡La mejor experiencia de compra en línea que he tenido! Envío rápido y excelente servicio al cliente."</p>
          <footer className="mt-2">— Jane Doe</footer>
        </blockquote>
      </section>
      <br/>
      {/* Ofertas y Promociones */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Oferta del Día</h3>
          <p>¡Ahorra un 30% en artículos seleccionados!</p>
        </div>
        <div className="bg-green-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Compra Uno y Lleva Otro Gratis</h3>
          <p>En todos los accesorios.</p>
        </div>
        <div className="bg-red-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Venta de Liquidación</h3>
          <p>Hasta un 50% de descuento en artículos en liquidación.</p>
        </div>
      </section>

<br/>
      {/* Noticias y Novedades */}
      <section className="bg-gray-800 text-white p-6 rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">Noticias y Novedades</h2>
        <ul>
          <li className="border-b border-gray-600 pb-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Nuevo Lanzamiento de Producto</h3>
            <p>Descubre nuestro último producto que acaba de llegar a la tienda.</p>
          </li>
          <li className="border-b border-gray-600 pb-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Evento Especial de Verano</h3>
            <p>Únete a nuestro evento especial de verano y disfruta de descuentos exclusivos.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">Consejos de Compras</h3>
            <p>Lee nuestros últimos consejos para hacer las mejores compras.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
