import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi2";

const styles = {
  wrapper:
    "bg-gray-900 p-2 flex items-center space-x-5 py-3 px-3 justify-between",
  searchBar:
    "bg-[#202226] flex items-center space-x-2 p-2 rounded-md max-w-xl ml-auto",
  input: "bg-transparent text-gray-200 flex-1 outline-none text-xs",
  option: "text-gray-200 capitalize text-sm max-lg:hidden",
  icon: "text-gray-200 capitalize text-sm max-md:hidden",
};

const options = ["explore", "stats", "resources", "create"];

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className={styles.wrapper}>
        <div className="flex items-center space-x-2">
          <Image src="/download.svg" width={35} height={35} />
          <p className="font-bold text-white">OpenSea</p>
        </div>
        <div className="flex-1 flex-row items-end">
          <div className={styles.searchBar}>
            <MagnifyingGlassIcon className="w-5 text-gray-200" />
            <input
              className={styles.input}
              placeholder="Search Items, collections and accounts"
            />
          </div>
        </div>
        <div className="flex-row flex space-x-7 items-center">
          <IoMenuSharp size={32} className="text-gray-300 lg:hidden" />
          {options.map((option) => (
            <p className={styles.option}>{option}</p>
          ))}
          <HiOutlineCreditCard className={styles.icon} size={26} />
          <HiUserCircle className={styles.icon} size={26} />
        </div>
      </div>
    </div>
  );
}
