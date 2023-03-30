import { Button } from "@mui/material";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { DefaultLayout } from "../../components/layout";

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <DefaultLayout>
      <div className="flex w-full">
        {isConnected ? (
          <div className="flex flex-col">
            <div>Connected to {ensName ?? address}</div>
          </div>
        ) : (
          <Button
            size="large"
            variant="contained"
            className="h-fit"
            onClick={() => connect()}
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
