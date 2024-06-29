"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
/* const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/furniture/pngwing.com__2_.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/furniture/pngwing.com__3_.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/furniture/pngwing.com__4_.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://hnuabzvdekpcvstajmkn.supabase.co/storage/v1/object/public/furniture/pngwing.com__5_.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
]; */

export default function FeaturedSection() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR("/api/products", fetcher);

  console.log(data);

  return (
    <div className=" w-full pb-28">
      <div className="mx-auto px-4   lg:w-[70%]  ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.data.slice(0, 4).map((product: Products) => (
            <div key={product.id} className="group relative">
              <div className="relative  w-full h-40  rounded-md bg-gray-200  group-hover:opacity-75 lg:h-80">
                <Image
                  fill
                  src={product.image}
                  alt={""}
                  className=" object-center object-contain"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  EUR {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
