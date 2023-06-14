import { configureChains, createClient, goerli, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "./App.css";
import AppProvider from "./contexts/AppProvider";
import createRoutes from "./routes";
import { bsc, bscTestnet } from "@wagmi/chains";

const { provider, webSocketProvider } = configureChains(
  [mainnet, goerli, bsc, bscTestnet],
  [publicProvider()],
);

const client = createClient({
  autoConnect: true,
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
