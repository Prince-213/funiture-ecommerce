"use client";

import React from "react";
import Image from "next/image";
import pic from "@/lib/assets/toa-heftiba-FV3GConVSss-unsplash.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const MainUi = () => {
  return (
    <div className=" w-full bg-[#00000081] relative h-[80vh] ">
      <Image
        fill
        alt=""
        src={pic}
        className=" object-cover object-center -z-10"
      />
      <div className=" w-[50%] mx-auto flex flex-col items-center">
        <div className="  flex flex-col items-center space-y-5 z-50 text-white py-28">
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            className=" font-semibold text-lg"
          >
            Inspired Living
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            className=" text-4xl lg:text-8xl font-semibold"
          >
            Collection
          </motion.h1>
          <p className=" text-xl font-medium w-[20rem]">
            {"Transform your home with Vaseb's innovative design solutions."}
          </p>
        </div>

        <div className=" space-y-4 flex flex-col">
          <button className=" px-8 w-[14rem] rounded-full font-medium py-3 bg-[#F9F7F4]">
            <Link href={"/categories"}>
              <p>Explore Collection</p>
            </Link>
          </button>

          <button className=" px-8 w-[14rem] rounded-full font-medium py-3 bg-[#F9F7F4]">
            <Link href={"/show"}>
              <p>Shop Now</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainUi;
