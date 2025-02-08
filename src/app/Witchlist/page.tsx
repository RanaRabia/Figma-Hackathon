'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";  

const Witchlist = () => {
  
  const initialProducts = [
    {
      id: 1,
      name: "Wing Chair",
      price: 31.84,
      quantity: 1,
      image: "./chair6).png",
    },
    {
      id: 2,
      name: "Sofa Chair",
      price: 45.99,
      quantity: 1,
      image: "./chair7.png",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [subtotal, setSubtotal] = useState(
    initialProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );
  const [estimatedDelivery, setEstimatedDelivery] = useState(5.99);
  const [handling, setHandling] = useState(3.99);


  const handleDelete = (id:any) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    updateSubtotal(updatedProducts);
  };

  const handleQuantityChange = (id:any, action:any) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: action === "increase" ? product.quantity + 1 : Math.max(product.quantity - 1, 1),
          }
        : product
    );
    setProducts(updatedProducts);
    updateSubtotal(updatedProducts);
  };

  
  const updateSubtotal = (updatedProducts:any) => {
    const newSubtotal = updatedProducts.reduce((acc:any, product:any ):any=> acc + product.price * product.quantity, 0);
    setSubtotal(newSubtotal);
  };

  
  const total = subtotal + estimatedDelivery + handling;

  return (
    <div className="flex justify-between py-8 px-16">
    
      <div className="w-3/5">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, "decrease")}
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, "increase")}
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        ))}
      </div>

      
      <div className="w-2/5 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <input
            type="number"
            step="0.01"
            value={subtotal.toFixed(2)}
            onChange={(e) => setSubtotal(parseFloat(e.target.value))}
            className="w-32 text-right border p-1 rounded-md"
          />
        </div>
        <div className="flex justify-between mb-4">
          <span>Estimated Delivery</span>
          <input
            type="number"
            step="0.01"
            value={estimatedDelivery.toFixed(2)}
            onChange={(e) => setEstimatedDelivery(parseFloat(e.target.value))}
            className="w-32 text-right border p-1 rounded-md"
          />
        </div>
        <div className="flex justify-between mb-4">
          <span>Handling</span>
          <input
            type="number"
            step="0.01"
            value={handling.toFixed(2)}
            onChange={(e) => setHandling(parseFloat(e.target.value))}
            className="w-32 text-right border p-1 rounded-md"
          />
        </div>
        <div className="flex justify-between font-bold mb-6">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link href="./Checkout"> <button className="bg-cyan-800 text-white py-2 w-full rounded-lg">Proceed to Checkout</button></Link>
      </div>
    </div>
  );
};

export default Witchlist;
