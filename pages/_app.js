import "../styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ThemeProvider } from "next-themes";

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      chainRpc={{
        [ChainId.Goerli]:
          "https://goerli.infura.io/v3/a6f782bec8b34f5fa7492a773a9c2ba1",
      }}
    >
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
export default MyApp;
