"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pic from "@/lib/assets/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg";
import Link from "next/link";

const Browse = () => {
  return (
    <div className=" w-full flex justify-center items-center bg-[#00000081] relative h-[80vh] ">
      <Image
        fill
        alt=""
        src={pic}
        className=" object-cover object-center -z-10"
      />
      <div className=" w-[50%] mx-auto space-y-10 flex flex-col items-center">
        <div className="  flex flex-col  items-center space-y-5 z-50 text-white py-28">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            className=" text-6xl font-semibold"
          >
            Browse Modern Today!
          </motion.h1>
          <p className=" text-xl font-medium w-[90%] text-center">
            {
              "Dive into our curated collection of contemporary furniture and decor, meticulously designed to elevate your living spaces."
            }
          </p>
          <div className=" flex flex-col">
            <Link className=" p-4 font-semibold underline" href="/about">
              <p>About Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
