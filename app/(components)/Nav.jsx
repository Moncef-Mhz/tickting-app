import React from "react";
import Link from "next/link";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";

function Nav() {
  return (
    <div className="w-full h-[80px] items-center flex justify-between px-4 bg-dark text-light">
      <div className="flex items-center ">
        <Link href="/" className="text-3xl flex items-center gap-3">
          <h1 className="text-lg">Home</h1>
        </Link>
      </div>
      <Link
        href="/Create-Ticket/new"
        className="font-bold p-2 bg-stone-700 cursor-pointer"
      >
        <AiOutlinePlus size={20} />
      </Link>
    </div>
  );
}

export default Nav;
