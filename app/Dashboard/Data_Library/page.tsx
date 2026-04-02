"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/context/CartContext";
import toast from "react-hot-toast";
import Quantity from "../Cart/Quantity";
import { div } from "three/tsl";

type Product = {
  id: number;
  image: string;
  details: string;
  price: number;
};

const cardData: Product[] = [
  {
    id: 1,
    image: "/img1.jpg",
    details:
      "ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms Display, NVIDIA® GeForce RTX™ 5060 Laptop GPU, Intel® Core™ i7 Processor.",
    price: 1392,
  },
  {
    id: 2,
    image: "/img2.jpg",
    details:
      "Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070 Ti Graphics – 32 GB Memory .",
    price: 2379,
  },
  {
    id: 3,
    image: "/img3.jpg",
    details:
      "ASUS ROG Xbox Ally – 7” 1080p 120Hz Touchscreen Gaming Handheld, 3-month Xbox Game Pass Premium included, AMD Ryzen Z2 A – 1 TB Storage.",
    price: 539,
  },
  {
    id: 4,
    image: "/img4.jpg",
    details:
      "Alienware 16 Aurora Laptop AC16250-16-inch 16:10 WQXGA Display, Intel Core 7-240H Series 2, 16GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 5060 8GB.",
    price: 2699,
  },
  {
    id: 5,
    image: "/img5.jpg",
    details:
      "Alienware Aurora Gaming Desktop ACT1250 - Intel Core Ultra 9 285 Processor, Liquid Cooled, NVIDIA GeForce RTX 5080, 32GB DDR5 RAM, 1TB SSD.",
    price: 1735,
  },
];

const DataLibrary = () => {
  const { addToCart } = useCart();
  const { cart, increaseQty, decreaseQty } = useCart();

  return (
    <section className="w-full grid grid-cols-5 gap-5  h-screen mt-5">
      {cardData.map((item) => {
        const cartItem = cart.find((c) => c.id === item.id);

        return (
          <div
            key={item.id}
            className=" w-full bg-gray-100 rounded-sm h-2/3 text-black flex flex-col gap-2"
          >
            <div className="relative w-full h-1/2  bg-white rounded-t-sm">
              <Image
                src={item.image}
                alt="Item Image"
                fill
                className="object-contain rounded-t-sm p-2"
              />
            </div>
            <div className="px-2 ">
              <p className="pb-1 text-sm leading-6">{item.details}</p>
              <p className="mb-2">
                <sup>$</sup>
                <span className="text-4xl font-semibold">{item.price}</span>
                <sup>99</sup>
              </p>
              {cartItem ? (
                <Quantity
                  increase={increaseQty}
                  decrease={decreaseQty}
                  itemId={item.id}
                  quantity={cartItem.quantity}
                />
              ) : (
                <Button
                  onClick={() => {
                    addToCart(item);
                    toast.success("Item added to cart!");
                  }}
                  className="bg-yellow-400 rounded-full px-2 my-auto text-xs hover:cursor-pointer"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DataLibrary;
