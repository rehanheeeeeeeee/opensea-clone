import Image from "next/image";
import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Listings from "./Listings";
import TopNavbarLayout from "../../Layouts/TopNavbarLayout";

const styles = {
  info: (top, left) =>
    `flex flex-col items-center py-5 px-14 w-50 ${
      top && "max-md:border-t max-md:border-white"
    } ${left && "md:border-l md:border-white"}`,
  infoHeader: "text-2xl font-semibold flex items-center text-white",
  infotitle: "text-xs text-gray-300",
  item: "flex flex-col items-center py-5 px-14 w-50",
};

export default function Main() {
  const CollectionInfo = () => (
    <div className="dark:bg-[#202226] flex flex-col w-full items-center justify-center px-5 space-y-5">
      <Image
        src="/collection.avif"
        width={175}
        height={1080}
        className="rounded-full border-4 border-white max-md:w-[150px] -mt-20 max-sm:w-[125px]"
      />
      <h1 className="text-3xl font-bold text-white">CryptoPunks</h1>
      <p className="text-gray-500 text-sm flex items-center space-x-2">
        <span> Created by</span>{" "}
        <CheckBadgeIcon className="w-5" color="#2192FF" />
      </p>
      <div className="flex flex-row border border-white rounded-xl">
        <div className="border-r border-white flex flex-col md:flex-row">
          <div className={styles.info(false)}>
            <h3 className={styles.infoHeader}>10.0K</h3>
            <p className={styles.infotitle}>items</p>
          </div>
          <div className={styles.info(true, true)}>
            <h3 className={styles.infoHeader}>
              {" "}
              <Image
                src={"/eth-logo.svg"}
                width={11}
                height={6}
                className="mr-1.5"
              />{" "}
              22
            </h3>
            <p className={styles.infotitle}>floor price</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={styles.info()}>
            <h3 className={styles.infoHeader}>3.5K</h3>
            <p className={styles.infotitle}>owners</p>
          </div>
          <div className={styles.info(true, true)}>
            <h3 className={styles.infoHeader}>
              <Image
                src={"/eth-logo.svg"}
                width={11}
                height={6}
                className="mr-1.5"
              />{" "}
              907.1K
            </h3>
            <p className={styles.infotitle}>Volume traded</p>
          </div>
        </div>
      </div>
      <p className="text-gray-100 text-sm p-2 py-3 text-center max-w-[800px]">
        CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and
        became one of the inspirations for the ERC-721 standard. They have been
        featured in places like The New York Times, Christie’s of London,
        Art|Basel Miami, and The PBS NewsHour.
      </p>
    </div>
  );

  return (
    <TopNavbarLayout>
      <div className="flex flex-col items-center">
        <Image
          src={"/cover.avif"}
          width={1080}
          height={1920}
          className="w-full"
        />
        <CollectionInfo />
        <Listings />
      </div>
    </TopNavbarLayout>
  );
}
