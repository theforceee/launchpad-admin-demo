import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
import PoolForm from "../PoolsPage/PoolForm";

const PoolDetailPage = () => {
  const poolDetails: RegisterInputs = {
    title: "Demo title",
    website: "",
    banner: "",
    token_logo: "",
    token_symbol: "",
    description: "",
    start_whitelist_time: "",
    end_whitelist_time: "",
    end_buy_time: "",
    end_join_time: "",
    free_buy_time_bonus: "",
    start_buy_time: "",
    start_free_buy_time: "",
    release_policy: "",
    release_type: "",
    totalSoldCoin: "",
    buyType: "",
    accepted_currency: "",
    airdropNetwork: "",
    token_network: "",
    type: "",
    network: "",
    start_join_time: "",
    exampleSelect: "",
  };

  return (
    <DefaultLayout>
      <div className="flex w-full">
        <PoolForm poolData={poolDetails} />
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
