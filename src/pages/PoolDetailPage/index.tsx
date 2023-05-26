import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs, defaultEmptyPool } from "../../constants/poolDetail";
import { get } from "../../requests";
import PoolForm from "../PoolsPage/PoolForm";

const PoolDetailPage = () => {
  const params = useParams();
  const [poolData, setPoolData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      if (!params) return;
      const poolDetailRes = await get(`/pool/${params.uuid}`);
      if (poolDetailRes.status !== 200) {
        toast.error("ERROR: Fail to pool detail");
        return;
      }

      const rawData = poolDetailRes.data;
      console.log("poolDetailRes rawData", rawData);

      const { token, pools } = rawData;

      const { token_sale_allocation, tokenomics, tokenReleases } = token;

      const formData: RegisterInputs = {
        status: rawData.status,

        name: rawData.name,
        slug: rawData.slug,
        is_featured: rawData.is_featured + "",
        website: rawData.website,
        twitter: rawData.twitter,
        telegram: rawData.telegram,
        discord: rawData.discord,
        about: rawData.about,
        litepaper: rawData.litepaper,
        tags: rawData.tags,

        token_name: token?.token_name,
        token_id: token?.token_id,
        token_address: token?.token_address,
        network: token?.network,
        token_decimal: token?.token_decimal,
        token_data_api: token?.token_data_api,
        total_supply: token?.total_supply,
        token_release: tokenReleases,

        start_whitelist_time: rawData.start_join_time,
        end_whitelist_time: rawData.end_join_time,
        allocation_private: token_sale_allocation?.private + "",
        allocation_public: token_sale_allocation?.public + "",
        allocation_venture_capital: token_sale_allocation?.venture_capital + "",

        pri_address: pools[0]?.address,
        pri_require_kyc: pools[0]?.require_kyc,
        pri_token_allocated: pools[0]?.token_allocated,
        pri_accepted_currency: pools[0]?.accepted_currency,
        pri_conversion_rate: pools[0]?.conversion_rate,
        pri_receiver_address: pools[0]?.receiver_address,
        pri_start_buy_time: pools[0]?.start_buy_time,
        pri_end_buy_time: pools[0]?.end_buy_time,
        pri_start_fcfs_time: pools[0]?.start_fcfs_time,
        pri_end_refund_time: pools[0]?.end_refund_time,
        pri_min_investment: pools[0]?.min_investment,
        pri_fcfs_amount: pools[0]?.fcfs_amount,

        pub_address: pools[1]?.address,
        pub_require_kyc: pools[1]?.require_kyc,
        pub_token_allocated: pools[1]?.token_allocated,
        pub_accepted_currency: pools[1]?.accepted_currency,
        pub_conversion_rate: pools[1]?.conversion_rate,
        pub_receiver_address: pools[1]?.receiver_address,
        pub_start_buy_time: pools[1]?.start_buy_time,
        pub_end_buy_time: pools[1]?.end_buy_time,
        pub_start_fcfs_time: pools[1]?.start_fcfs_time,
        pub_end_refund_time: pools[1]?.end_refund_time,
        pub_min_investment: pools[1]?.min_investment,
        pub_fcfs_amount: pools[1]?.fcfs_amount,

        tokenominc_development: tokenomics?.development,
        tokenominc_marketing: tokenomics?.marketing,
        tokenominc_operations: tokenomics?.operations,
        tokenominc_dex_pool: tokenomics?.dex_pool,
        tokenominc_token_sale: tokenomics?.token_sale,
        tokenominc_team: tokenomics?.team,
        tokenominc_advisory: tokenomics?.advisory,
        tokenominc_partnerships: tokenomics?.partnerships,
        tokenominc_community: tokenomics?.community,
        tokenominc_legal: tokenomics?.legal,
      };

      console.log("formData", formData);
      setPoolData(formData);
    };
    getData();
  }, [params]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-center text-28/40 font-semibold">
          INITIAL DEX OFFERING (IDO)
        </p>

        <div className="mx-auto w-full max-w-7xl">
          <PoolForm poolData={poolData} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
