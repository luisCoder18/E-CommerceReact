import React from 'react';

const ProductPage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-5xl font-bold text-white mb-4">Product Page</h1>
      <p className="text-xl text-gray-300 mb-8">Browse our selection of products.</p>

      {/* Simulated Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Product 1</h3>
          <p>$29.99</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Add to Cart</button>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Product 2</h3>
          <p>$49.99</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Add to Cart</button>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Product 3</h3>
          <p>$99.99</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
