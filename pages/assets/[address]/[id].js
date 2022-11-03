import React, { useEffect, useState } from "react";
import TopNavbarLayout from "../../../Layouts/TopNavbarLayout";
import { useMarketplace, useAddress, useBuyNow } from "@thirdweb-dev/react";
import NftIamge from "../../../components/Nft/NftImage";
import NftPrice from "../../../components/Nft/NftPrice";
import NftHeader from "../../../components/Nft/NftHeader";
import NftInfo from "../../../components/Nft/NftInfo";
import NftDetails from "../../../components/Nft/NftDetails";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
};

const styles = {
  wrapper: "bg-[#202226] flex flex-col items-center justify-center p-10",
  container: "w-full md:ml-5 flex flex-col",
  nftContainer:
    "flex max-lg:flex-col lg:space-x-10 justify-center max-lg:items-center w-full flex-row-reverse items-start max-lg:max-w-xl",
};

export default function CryptoPunk({ id }) {
  const [nft, setNft] = useState({});
  const router = useRouter();
  const contract = useMarketplace(
    "0xbF6b521292F1B1b0F9C744E5030C8Ce49655A7bD",
    "marketplace"
  );
  const { mutate: buyNow, isLoading, isSuccess } = useBuyNow(contract);
  const address = useAddress();

  useEffect(() => {
    if (!address) {
      router.replace("/");
    }
  }, [address]);

  useEffect(() => {
    const listing = async () => {
      try {
        await contract
          ?.getListing(BigNumber.from(id))
          .then((listing) => setNft(listing));
      } catch (error) {
        console.log(error);
      }
    };
    listing();
  }, []);

  const NftRight = ({ nft }) => (
    <div className="flex flex-col w-fit">
      <NftIamge nft={nft} />
      <NftDetails nft={nft} />
    </div>
  );

  const NftLeft = ({ nft }) => (
    <div className={styles.container}>
      <NftHeader />
      <p className="text-2xl font-bold text-gray-200 my-4 md:text-[3vw] lg:text-[3vw]">
        {nft?.asset?.name}
      </p>
      <NftInfo nft={nft} />
      <NftPrice
        nft={nft}
        buyNow={buyNow}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );

  return (
    <TopNavbarLayout>
      <div className={styles.wrapper}>
        <div className={styles.nftContainer}>
          <NftLeft nft={nft} />
          <NftRight nft={nft} />
        </div>
      </div>
    </TopNavbarLayout>
  );
}
