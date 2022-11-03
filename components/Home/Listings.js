import React, { useEffect, useState } from "react";
import { useContract } from "@thirdweb-dev/react";
import NFTCard from "./NFTCard";
import Link from "next/link";

const styles = {
  wrapper:
    "mx-auto grid flex-1 grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 md:pt-10 p-10 pt-18 max-w-fit gap-8 overflow-x-hidden",
};

export default function Listings() {
  const { contract } = useContract(
    "0xbF6b521292F1B1b0F9C744E5030C8Ce49655A7bD",
    "marketplace"
  );
  const [activeListings, setActiveListings] = useState([]);

  useEffect(() => {
    const listings = async () => {
      try {
        await contract
          .getActiveListings()
          .then((activeListings) => setActiveListings(activeListings));
      } catch (error) {
        console.log(error);
      }
    };
    listings();
  }, []);

  return activeListings.length ? (
    <div className={styles.wrapper}>
      {activeListings.map((listing, index) => (
        <Link
          key={index}
          href={`/assets/${listing.assetContractAddress}/${listing.id}`}
        >
          <NFTCard listing={listing} />
        </Link>
      ))}{" "}
    </div>
  ) : (
    <h1 className="text-white text-center my-3">
      <center>Loading Nfts Please Be Patient...</center>
    </h1>
  );
}
