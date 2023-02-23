import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { verifyMessage } from "ethers/lib/utils";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SiweMessage } from "siwe";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useSignMessage,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { URLS } from "../../constants";
import { AppContext } from "../../contexts/AppContext";
import { get, post } from "../../requests";

const LoginPage = () => {
  const { address, isConnected, isConnecting, connector } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const recoveredAddress = useRef<string>();
  const { userLogin, setUserLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const { disconnect } = useDisconnect();
  const { signMessageAsync, isLoading: loadingSignIn } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
    },
    onError(error) {
      toast.error("Fail to sign in: " + error.message);
    },
  });

  useEffect(() => {
    console.log("userLogin", userLogin);
    if (userLogin) navigate(URLS.HOME);
  }, [userLogin]);

  const handleSignIn = async () => {
    const resp = await get("/jobs");
    console.log(resp);
    const chainId = await connector?.getChainId();
    // const nonceRes = await get("/admin/nonce");
    const nonceRes: any = {};
    const nonce = nonceRes?.body?.data?.nonce;

    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
      issuedAt: new Date().toLocaleString(),
    });

    const signature = await signMessageAsync({
      message: message.prepareMessage(),
    });
    setUserLogin && setUserLogin({ address, token: signature });
    localStorage.setItem(`sig_${address}`, signature);
    navigate(URLS.HOME);

    const loginRes = await post("/admin/login", {
      body: {
        message,
        signature,
      },
    });
    console.log("loginRes", loginRes);
  };
  return (
    <div className="w-screen h-screen flex justify-center pt-40">
      <div className="flex flex-col max-w-[500px] w-full">
        <div className="text-40/52 text-center">
          {isConnected ? "Wallet Connected" : "Connect Your Wallet"}
        </div>
        <div className="text-center mt-10 text-18/24">
          {isConnected ? (
            <div className="flex flex-col">
              <FormControl disabled variant="standard">
                <InputLabel htmlFor="component-disabled">
                  Current Ethereum Address
                </InputLabel>
                <Input
                  id="component-disabled"
                  defaultValue={ensName ?? address}
                />
              </FormControl>
            </div>
          ) : (
            <p>Connect to continue signing in!</p>
          )}
        </div>
        <div className="mt-10 flex w-full">
          {isConnected ? (
            <div className="grid grid-cols-2 gap-5 w-full">
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
