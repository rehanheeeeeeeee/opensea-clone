import React from "react";
import Image from "next/image";
import { BsCreditCard2Front, BsTagFill } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const styles = {
  wrapper: "rounded-t-lg bg-[#3C4048] border border-black pb-3 my-6",
  dateWrapper:
    "flex flex-row items-center justify-between bg-[#252525] border-b border-black  p-2 rounded-t-lg",
  date: "flex flex-row text-gray-400 items-center space-x-2 text-xs",
  buy: (isLoading) =>
    `${
      isLoading ? "bg-gray-400" : "bg-blue-600"
    } text-white rounded-md py-2 px-10 flex items-center space-x-3`,
  btnWrapper: "p-3 flex items-center space-x-3 lg:space-x-5",
};

export default function NftPrice({ nft, buyNow, isLoading, isSuccess }) {
  const router = useRouter();
  const EndDate = () => (
    <div className={styles.dateWrapper}>
      <div className={styles.date}>
        <AiOutlineClockCircle size={24} />
        <p>
          Sales ends at{" "}
          {new Date(nft?.secondsUntilEnd?.toNumber()).toUTCString()}
        </p>
      </div>
      <AiOutlineQuestionCircle color={"white"} size={24} />
    </div>
  );

  const Price = () => (
    <div className="flex flex-col space-y-2 p-3 ">
      <p className="text-gray-400 text-xs">Buy at</p>
      <div className="flex items-center space-x-3">
        <Image src={"/weth-logo.svg"} width={20} height={25} alt="" />
        <p className="text-2xl font-bold text-white">
          {nft?.buyoutPrice?.toNumber() / 1e18}
        </p>
      </div>
    </div>
  );

  const buy = async () => {
    await buyNow({
      id: nft.id,
      buyAmount: 1,
      type: nft.type,
    });
  };

  isSuccess && router.replace("/");

  const Button = ({ name, Icon }) => (
    <button
      disabled={isLoading}
      onClick={() => buy()}
      className={styles.buy(isLoading)}
    >
      {Icon}
      <span>Buy Now</span>
    </button>
  );

  return (
    <div className={styles.wrapper}>
      <EndDate />
      <Price />
      <div className={styles.btnWrapper}>
        <Button name="Buy Now" Icon={<BsCreditCard2Front />} />
      </div>
    </div>
  );
}
