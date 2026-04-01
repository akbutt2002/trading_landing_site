"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import Quantity from "./Quantity";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-md p-6">
        {/* Heading */}
        <h1 className="text-3xl font-semibold  border-b pb-4 mb-6">
          Shopping Cart
        </h1>

        {/* Cart Item */}
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b pb-6">
            {/* Image */}
            <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt="Cart Item"
                fill
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.details}
              </p>
              <Quantity
                increase={increaseQty}
                decrease={decreaseQty}
                itemId={item.id}
                quantity={item.quantity}
              />
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                <sup>$</sup>
                <span className="text-xl font-semibold">
                  {item.quantity > 1
                    ? (item.price * item.quantity).toFixed(2)
                    : item.price.toFixed(2)}
                </span>
              </h3>
            </div>
          </div>
        ))}
        {/* Total Price Section */}
        {cart.length > 0 && (
          <div className="flex justify-between items-center pl-2 pt-4">
            <h2 className="text-xl font-semibold">Total:</h2>
            <h2 className="text-xl font-bold">
              <sup>$</sup>
              {totalPrice.toFixed(2)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
