import { InjectedConnector, configureChains } from "@wagmi/core";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { publicProvider } from "@wagmi/core/providers/public";
import { goerli, mainnet } from "viem/chains";
import { WagmiConfig, createConfig } from "wagmi";
import "./App.css";
import { bsc, bscTestnet } from "@wagmi/core/chains";
import AppProvider from "./contexts/AppProvider";
import createRoutes from "./routes";
import { useEffect } from "react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, bsc, bscTestnet],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

function App() {
  useEffect(() => {
    config.autoConnect();
    console.log("connectors", config.lastUsedChainId, config.connector);
  }, []);

  return (
    <WagmiConfig config={config}>
      <AppProvider>{createRoutes()}</AppProvider>
    </WagmiConfig>
  );
}

export default App;
