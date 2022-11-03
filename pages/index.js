import Head from "next/head";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Main from "../components/Home/Main";

const styles = {
  wrapper: "flex items-center justify-center h-[100vh]",
  connectBtn:
    "rounded-lg border border-black px-10 py-5 transition-all ease-in hover:bg-black hover:text-white",
};

export default function Home() {
  // Initalizing the useMetamask which will help our users to connect to our website
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  const Auth = () => (
    <div className={styles.wrapper}>
      <button className={styles.connectBtn} onClick={connectWithMetamask}>
        Connect Wallet
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center bg-[#202226]">
      <Head>
        <title>OpenSea</title>
      </Head>
      {address ? <Main /> : <Auth />}
    </div>
  );
}
