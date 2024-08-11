import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice'; 

const products = [
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
  {
    id: 5,
    name: 'Portátil Gaming',
    description: 'Laptop para juegos con gráficos de alta calidad y rendimiento rápido.',
    price: '$1,299.99',
    image: '/producto1.jpg',
  },
  {
    id: 6,
    name: 'Televisor 4K',
    description: 'Televisor con resolución 4K y tecnología HDR para una experiencia visual inmersiva.',
    price: '$799.99',
    image: '/producto1.jpg',
  },
  {
    id: 7,
    name: 'Tablet',
    description: 'Tablet con pantalla táctil de alta definición y gran capacidad de almacenamiento.',
    price: '$349.99',
    image: '/producto1.jpg',
  },
  {
    id: 8,
    name: 'Cámara de Seguridad',
    description: 'Sistema de cámaras de seguridad para proteger tu hogar o negocio.',
    price: '$229.99',
    image: '/producto1.jpg',
  },
  {
    id: 9,
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico con retroiluminación RGB y teclas programables.',
    price: '$89.99',
    image: '/producto1.jpg',
  },
  {
    id: 10,
    name: 'Ratón Gaming',
    description: 'Ratón ergonómico para juegos con alta precisión y múltiples botones programables.',
    price: '$69.99',
    image: '/producto1.jpg',
  },
  {
    id: 11,
    name: 'Impresora 3D',
    description: 'Impresora 3D para crear prototipos y modelos personalizados.',
    price: '$399.99',
    image: '/producto1.jpg',
  },
  {
    id: 12,
    name: 'Escáner de Documentos',
    description: 'Escáner de documentos de alta resolución para digitalizar tus archivos.',
    price: '$129.99',
    image: '/producto1.jpg',
  },
  {
    id: 13,
    name: 'Sistema de Audio',
    description: 'Sistema de audio con sonido envolvente para una experiencia auditiva superior.',
    price: '$249.99',
    image: '/producto1.jpg',
  },
  {
    id: 14,
    name: 'Proyector',
    description: 'Proyector de alta definición para ver tus películas y presentaciones en grande.',
    price: '$349.99',
    image: '/producto1.jpg',
  },
  {
    id: 15,
    name: 'Cámara de Acción',
    description: 'Cámara resistente al agua y golpes, ideal para deportes extremos.',
    price: '$179.99',
    image: '/producto1.jpg',
  },
  {
    id: 16,
    name: 'Estación de Carga',
    description: 'Estación de carga para múltiples dispositivos, incluye carga rápida.',
    price: '$59.99',
    image: '/producto1.jpg',
  },
  {
    id: 17,
    name: 'Altavoces Bluetooth',
    description: 'Altavoces portátiles con conectividad Bluetooth y sonido de alta calidad.',
    price: '$89.99',
    image: '/producto1.jpg',
  },
  {
    id: 18,
    name: 'Smartwatch',
    description: 'Reloj inteligente con monitoreo de salud y notificaciones en tu muñeca.',
    price: '$229.99',
    image: '/producto1.jpg',
  },
  {
    id: 19,
    name: 'Auriculares con Cable',
    description: 'Auriculares con cable de alta fidelidad y diseño ergonómico.',
    price: '$79.99',
    image: '/producto1.jpg',
  },
  {
    id: 20,
    name: 'Almohadilla de Carga Inalámbrica',
    description: 'Base de carga inalámbrica para tu smartphone con soporte para carga rápida.',
    price: '$39.99',
    image: '/producto1.jpg',
  },
];

const ProductsListPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

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
            <div className="flex gap-4">
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Ver detalles
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
