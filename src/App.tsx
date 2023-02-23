import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "./App.css";
import AppProvider from "./contexts/AppProvider";
import createRoutes from "./routes";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
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
