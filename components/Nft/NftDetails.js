import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";
const styles = {
  about: `flex flex-row items-center justify-between p-3`,
  wrapper:
    "flex flex-col my-5 border text-gray-400 border-black rounded-md divide-y divide-black",
};

export default function NftDetails({ nft }) {
  console.log(nft);
  const nftDetails = [
    {
      title: "Description",
      Icon: <BiMenuAltLeft size={25} />,
      dropdownData: nft?.asset?.description,
    },
    {
      title: "Accessory",
      Icon: <BsFillBookmarkFill size={25} />,
      dropdownData: nft?.asset?.attributes,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {nftDetails.map((detail, index) => {
        return (
          <Dropdown
            key={index}
            title={detail.title}
            Icon={detail.Icon}
            dropdownData={detail.dropdownData}
          />
        );
      })}
    </div>
  );
}
