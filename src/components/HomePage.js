import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-5xl font-bold text-white mb-4">Home Page</h1>
      <p className="text-xl text-gray-300 mb-8">Welcome to our e-commerce site!</p>

      <div className="bg-yellow-500 text-black p-4 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold">Limited Time Offer!</h2>
        <p className="text-lg">Get 20% off on your first purchase. Use code: FIRST20</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Electronics</h3>
          <p>Latest gadgets and devices.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Clothing</h3>
          <p>Trendy fashion and apparel.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Home & Kitchen</h3>
          <p>Everything for your home.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Sports</h3>
          <p>Gear and equipment for sports enthusiasts.</p>
        </div>
      </div>

      <div className="mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
      </div>

      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg mt-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Popular Products</h2>
        <ul>
          <li className="bg-gray-700 text-white p-4 rounded-lg mb-2">Popular Product 1 - $29.99</li>
          <li className="bg-gray-700 text-white p-4 rounded-lg mb-2">Popular Product 2 - $49.99</li>
          <li className="bg-gray-700 text-white p-4 rounded-lg">Popular Product 3 - $99.99</li>
        </ul>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p className="text-lg italic">"The best online shopping experience I've ever had! Fast shipping and excellent customer service."</p>
          <footer className="mt-2">— Jane Doe</footer>
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Deal of the Day</h3>
          <p>Save 30% on selected items!</p>
        </div>
        <div className="bg-green-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Buy One Get One Free</h3>
          <p>On all accessories.</p>
        </div>
        <div className="bg-red-700 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Clearance Sale</h3>
          <p>Up to 50% off on clearance items.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
