import Head from "next/head";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Main from "../components/Home/Main";
import Link from "next/link";
import Image from "next/image";

const styles = {
  wrapper: "flex flex-col space-y-6 items-center justify-center h-[100vh]",
  connectBtn:
    "rounded-lg border border-black px-10 py-5 transition-all ease-in hover:bg-blue-600 bg-black text-white",
};

export default function Home() {
  // Initalizing the useMetamask which will help our users to connect to our website
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  const Auth = () => (
    <div className={styles.wrapper}>
      <Image src={"/download.svg"} width={175} height={175} />
      <button className={styles.connectBtn} onClick={connectWithMetamask}>
        Connect Wallet
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center bg-[#202226]">
      <Head>
        <title>OpenSea</title>
        <link rel="icon" href="/download.svg"></link>
      </Head>
      {address ? <Main /> : <Auth />}
    </div>
  );
}
