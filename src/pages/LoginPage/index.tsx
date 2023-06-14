import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { verifyMessage } from "ethers/lib/utils";
import { useContext, useRef } from "react";
import { useOutletContext } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useDisconnect, useEnsName, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { KEY_CACHE, SessionContextTypes, URLS } from "../../constants";
import { AppContext } from "../../contexts/AppContext";
import { get, post } from "../../requests";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserLogin } = useContext(AppContext);
  const session: SessionContextTypes = useOutletContext();
  const { address, isConnected, isConnecting, connector } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const recoveredAddress = useRef<string>();

  const { disconnect } = useDisconnect();
  const { signMessageAsync, isLoading: loadingSignIn } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      // const address = verifyMessage(variables.message, data);
      // recoveredAddress.current = address;
    },
    onError(error) {
      toast.error("Fail to sign in: " + error.message);
    },
  });

  const handleSignIn = async () => {
    const chainId = await connector?.getChainId();
    const nonceRes = await get("/nonce");
    const nonce = nonceRes?.data?.nonce;

    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
      issuedAt: new Date().toISOString(),
    });

    const signature = await signMessageAsync({
      message: message.prepareMessage(),
    });

    const loginRes = await post("/login", {
      body: {
        message,
        signature,
      },
    });

    if (!loginRes || loginRes.status !== 200) {
      toast.error("Fail to login: " + loginRes.message);
      return;
    }

    const userToken = loginRes.data?.token?.token;
    setUserLogin && setUserLogin({ address, token: userToken });
    localStorage.setItem(KEY_CACHE, userToken);
    session?.login(userToken);
    navigate(URLS.HOME);
  };

  return (
    <div className="flex h-screen w-screen justify-center pt-40">
      <div className="flex w-full max-w-[500px] flex-col">
        <div className="text-center text-40/52">
          {isConnected ? "Wallet Connected" : "Connect Your Wallet"}
        </div>
        <div className="mt-10 text-center text-18/24">
          {isConnected ? (
            <div className="flex flex-col">
              <FormControl disabled variant="standard">
                <InputLabel htmlFor="component-disabled">Current Ethereum Address</InputLabel>
                <Input id="component-disabled" defaultValue={ensName ?? address} />
              </FormControl>
            </div>
          ) : (
            <p>Connect to continue signing in!</p>
          )}
        </div>
        <div className="mt-10 flex w-full">
          {isConnected ? (
            <div className="grid w-full grid-cols-2 gap-5">
              <Button
                onClick={() => disconnect()}
                variant="contained"
                color="inherit"
                className="h-14 w-full"
              >
                Disconnect
              </Button>
              <Button
                onClick={handleSignIn}
                variant="contained"
                color="warning"
                className="h-14 w-full"
                disabled={loadingSignIn}
              >
                {loadingSignIn ? "Connecting ..." : "Sign In"}
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => connect()}
              variant="contained"
              disabled={isConnecting}
              className="h-14 w-full"
            >
              {isConnecting ? "Connecting ..." : "Connect Wallet"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
