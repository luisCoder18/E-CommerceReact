import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const allProducts = [
  {
    id: 1,
    name: 'Cámara Digital',
    description: 'Captura tus momentos especiales con esta cámara de alta resolución.',
    price: '$299.99',
    image: '/producto1.jpg',
    additionalImages: [
      '/producto1.jpg',
      '/producto1.jpg',
    ],
    details: 'Incluye batería, cargador y manual de usuario. Ideal para fotografía profesional y personal.',
  },
  {
    id: 2,
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido de alta calidad y cancelación de ruido.',
    price: '$149.99',
    image: '/producto1.jpg',
    additionalImages: [
      '/producto1.jpg',
      '/producto1.jpg',
    ],
    details: 'Batería de larga duración y control táctil. Compatibles con todos los dispositivos Bluetooth.',
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Smartphone con pantalla de alta definición y gran capacidad de almacenamiento.',
    price: '$699.99',
    image: '/producto1.jpg',
    additionalImages: [
      '/producto1.jpg',
      '/producto1.jpg',
    ],
    details: 'Cuenta con una cámara de 48MP y almacenamiento interno de 128GB. Compatible con 5G.',
  },
  {
    id: 4,
    name: 'Reloj Inteligente',
    description: 'Reloj inteligente con múltiples funciones para tu estilo de vida activo.',
    price: '$199.99',
    image: '/producto1.jpg',
    additionalImages: [
      '/producto1.jpg',
      '/producto1.jpg',
    ],
    details: 'Monitoreo de frecuencia cardíaca, seguimiento de actividad y notificaciones inteligentes.',
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el id del producto de la URL
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Buscar el producto con el id proporcionado
    const selectedProduct = allProducts.find((prod) => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-6">{product.price}</p>
        
        {/* Información adicional */}
        <p className="text-lg mb-4">{product.details}</p>
        
        {/* Imágenes adicionales */}
        <div className="mb-6">
          {product.additionalImages && product.additionalImages.length > 0 ? (
            product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Detalle ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            ))
          ) : (
            <p>No hay imágenes adicionales disponibles.</p>
          )}
        </div>
        
        {/* Ofertas Exclusivas */}
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">Ofertas Exclusivas</h3>
          <p className="text-lg mb-2">¡Aprovecha nuestras ofertas exclusivas solo por hoy!</p>
          <ul className="list-disc list-inside mb-4">
            <li>Descuento del 10% en tu próxima compra.</li>
            <li>Envío gratuito en pedidos superiores a $50.</li>
            <li>Devoluciones gratuitas en los primeros 30 días.</li>
          </ul>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
