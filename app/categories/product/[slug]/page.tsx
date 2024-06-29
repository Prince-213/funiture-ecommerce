"use client";

import React, { useState } from "react";
import pic from "@/lib/assets/pngwing.com (1).png";
import Image from "next/image";
import useSWR from "swr";
import { useCartStore } from "@/lib/store/store";

const Page = ({ params }: { params: { slug: string } }) => {
  const { add: handleAddToCart } = useCartStore();

  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const result = await res.json();

    return result;
  };

  const { data, error } = useSWR(`/api/product/${params.slug}`, fetcher);

  const product: Products = data?.data;

  const [quantity, setQuantity] = useState(0);

  const products = {
    id: product?.id,
    name: product?.name,
    image: product?.image,
    price: product?.price,
    category: product?.category,
  } as Products;

  return (
    <div className=" w-full min-h-screen">
      <div className=" w-[80%] mx-auto py-10">
        <div className=" grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-20 w-full h-[70vh]">
          <div className=" w-full relative h-40 lg:h-full bg-[#F2EDE7]">
            <Image
              src={product?.image}
              fill
              alt=""
              className=" object-contain object-center w-[40rem] h-[40rem]"
            />
          </div>
          <div className=" lg:h-full h-fit flex flex-col justify-center">
            <div className=" space-y-8 pb-8 border-b-2 border-gray-300">
              <h1 className=" text-5xl font-semibold">{product?.name}</h1>
              <p className=" text-xl font-semibold">{product?.price} EUR</p>
            </div>
            <div className=" py-10">
              <h2 className=" text-lg">Description</h2>
              <br />
              <p>
                Illuminate your room with our elegant floor lamp. Featuring a
                sleek metal frame and a soft fabric shade, this lamp provides
                both ambient lighting and a stylish accent to any decor.
              </p>
            </div>
            <div className=" space-y-4">
              <p>
                <span className=" font-semibold capitalize">Category:</span>{" "}
                {product?.category}
              </p>
              <p>
                <span className=" font-semibold capitalize ">Material:</span>{" "}
                {product?.material.map((item: string) => `${item}, `)}
              </p>
            </div>
            <div className=" flex items-center space-x-5 mt-10 ">
              <button
                onClick={() => handleAddToCart(products)}
                className=" border-2 border-black rounded-lg text-black px-6 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-48 lg:mt-10">
          <h1 className=" text-3xl underline font-medium">Product Overview</h1>
          <div className=" space-y-5 mt-5 text-lg">
            <p>
              The primary goal of Vaseb is to provide a curated selection of
              high-quality, stylish, and functional furniture and home decor
              items that cater to modern living. Dublin-funitures aims to
              integrate advanced technology with contemporary design to create
              smart home solutions that enhance the comfort, efficiency, and
              aesthetics of living spaces. aseb aims to seamlessly integrate
              advanced technology with contemporary design, providing smart home
              solutions that enhance comfort, efficiency, and aesthetics.
            </p>

            <p>
              Dublin-Furnitures caters to a wide range of customers, including
              young professionals, families, and tech-savvy individuals who
              value both style and functionality in their living spaces. The
              brand appeals to those who seek modern, high-quality home
              furnishings that enhance their lifestyle and reflect their
              personal taste. To become a leading name in the home decor and
              smart home market by consistently delivering innovative, stylish,
              and sustainable products that transform living spaces into
              beautiful, functional, and intelligent environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
