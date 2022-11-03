import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const styles = {
  wrapper:
    "flex flex-row items-center justify-between text-gray-400 bg-[#3C4048] p-3 rounded-t-md",
  nftImg: "lg:w-[600px] lg:h-[380px]",
  likes: "flex flex-row items-center space-x-2",
};

const NftIamge = ({ nft }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={"/eth-logo.svg"} width={11} height={11} alt="" />
        <div className={styles.likes}>
          <HeartIcon className="w-4" />
          <span className="text-xs">200</span>
        </div>
      </div>
      <Image
        alt=""
        src={nft?.asset?.image}
        width={1080}
        height={1920}
        className={styles.nftImg}
      />
    </>
  );
};

export default NftIamge;
