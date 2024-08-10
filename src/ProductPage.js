// ProductPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-lg text-gray-600 mt-2">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
