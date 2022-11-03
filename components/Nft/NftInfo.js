import React from "react";
import { BsFillEyeFill, BsHeartFill } from "react-icons/bs";

export default function NftInfo({ nft }) {
  return (
    <div className="flex flex-row whitespace-nowrap text-gray-400 items-center text-sm space-x-5 my-2">
      <p>
        Owned by <span className="ml-1 text-blue-700">ABC</span>
      </p>
      <p className="flex items-center space-x-1">
        <BsFillEyeFill />
        <span>4.6k views</span>
      </p>
      <p className="flex items-center space-x-1">
        <BsHeartFill />
        <span>200 favorites</span>
      </p>
    </div>
  );
}
