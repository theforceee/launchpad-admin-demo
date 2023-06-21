import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { DefaultLayout } from "../../components/layout";
import { SessionContextTypes, URLS } from "../../constants";
import { InjectedConnector } from "@wagmi/core";

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const session: SessionContextTypes = useOutletContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Do you want logout?")) {
      return false;
    }

    // logout
    session?.logout();
    navigate(URLS.LOGIN);
  };

  // const [loginUser, setLoginUser] = useState<any>({});

  // useEffect(() => {
  //   const user = localStorage.getItem("user") || "{}";
  //   setLoginUser(JSON.parse(user));
  // }, []);

  return (
    <DefaultLayout>
      <div className="flex w-full">
        {isConnected ? (
          <div className="flex flex-col">
            <div>Connected to {ensName ?? address}</div>

            <Button variant="contained" color="error" onClick={logoutUser}>
              Disconnect
            </Button>
          </div>
        ) : (
          <Button size="large" variant="contained" className="h-fit" onClick={() => connect()}>
            Connect Wallet
          </Button>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
