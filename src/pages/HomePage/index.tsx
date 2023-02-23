import { Button } from "@mui/material";
import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { DefaultLayout } from "../../components/layout";
import { useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";
import { useRef } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const recoveredAddress = useRef<string>();

  const { disconnect } = useDisconnect();
  const { data, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
    },
    onError(error) {
      toast.error("Fail to sign in: " + error.message);
    },
  });

  const handleSign = () => {
    signMessage({
      message: "Sign in to metamask",
    });
  };

  return (
    <DefaultLayout>
      <div className="flex w-full">
        {isConnected ? (
          <div className="flex flex-col">
            <div>Connected to {ensName ?? address}</div>
            {data ? (
              <div className="flex flex-col">
                <div className="flex">Signature: {data}</div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => disconnect()}
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button variant="contained" onClick={handleSign}>
                Sign Message
              </Button>
            )}
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
