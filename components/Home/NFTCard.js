import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function NFTCard({ listing }) {
  const { attributes, image, description, name } = listing.asset;

  return (
    <div className="bg-white dark:bg-[#333333] text-gray-600 shadow-lg transition-all duration-300 hover:shadow-2xl dark:text-gray-300 rounded-md">
      <Image src={image} width={300} height={300} className="rounded-t-md" />
      <div className="flex items-start justify-between space-x-2 p-3 pt-2">
        <h3 className="text-sm font-semibold">{name}</h3>
        <div className="text-xs flex flex-col items-end space-y-1">
          <p className="text-xs font-small">Buy at </p>
          <p className="flex items-center justify-around text-sm">
            {" "}
            <Image
              src={"/weth-logo.svg"}
              width={10}
              height={10}
              className="mr-1"
            />{" "}
            {listing.buyoutPrice.toNumber() / 1e18}
          </p>
          <p className="flex items-center justify-around space-x-1">
            <HeartIcon className="w-4" /> <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
