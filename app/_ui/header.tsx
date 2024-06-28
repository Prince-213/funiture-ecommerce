"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useCartStore } from "@/lib/store/store";

export default function Page({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { count } = useCartStore();

  return (
    <header className=" w-full py-5">
      <div className=" w-[80%] flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <p className=" text-3xl font-semibold">Dublin-Funiture</p>
        </Link>
        <nav>
          <ul className=" flex items-center space-x-5">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
          </ul>
        </nav>
        <div className=" flex items-center space-x-4">
          <User />
          <button onClick={() => setModal(true)}>Cart ({count()})</button>
        </div>
      </div>
    </header>
  );
}
