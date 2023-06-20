import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { bsc, bscTestnet, mainnet, goerli } from "wagmi/chains";
import "./App.css";
import AppProvider from "./contexts/AppProvider";
import createRoutes from "./routes";
import { InjectedConnector } from "wagmi/connectors/injected";

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet, goerli, bsc, bscTestnet],
  [publicProvider()],
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains }), new InjectedConnector({ chains })],
  provider,
  webSocketProvider,
});

function App() {
  return (
    <WagmiConfig client={client}>
      <AppProvider>{createRoutes()}</AppProvider>
    </WagmiConfig>
  );
}

export default App;
