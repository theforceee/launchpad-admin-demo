import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
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
      const { token, pools } = rawData;
      const privatePool = pools?.find((pool: any) => pool.is_private === true);
      const publicPool = pools?.find((pool: any) => pool.is_private === false);
      const { token_sale_allocation, tokenomics, tokenReleases } = token;

      const formData: RegisterInputs = {
        signer: rawData.signer,
        status: rawData.status,

        name: rawData.name || "",
        slug: rawData.slug || "",
        website: rawData.website || "",
        twitter: rawData.twitter || "",
        telegram: rawData.telegram || "",
        discord: rawData.discord || "",
        about: rawData.about || "",
        litepaper: rawData.litepaper || "",
        tags: rawData.tags,

        token_name: token?.token_name || "",
        token_id: token?.token_id || "",
        token_address: token?.token_address || "",
        network: token?.network || "",
        token_decimal: token?.token_decimal || "",
        token_data_api: token?.token_data_api || "",
        total_supply: token?.total_supply || "",
        token_release: tokenReleases,
        accepted_currency: rawData?.accepted_currency,
        require_kyc: rawData?.require_kyc + "",

        start_join_time: rawData.start_join_time,
        end_join_time: rawData.end_join_time,
        allocation_private: token_sale_allocation?.private + "",
        allocation_public: token_sale_allocation?.public + "",
        allocation_venture_capital: token_sale_allocation?.venture_capital + "",

        pri_is_deployed: privatePool?.is_deployed,
        pri_address: privatePool?.address || "",
        pri_token_allocated: privatePool?.token_allocated || "",
        pri_conversion_rate: privatePool?.conversion_rate || "",
        pri_receiver_address: privatePool?.receiver_address || "",
        pri_start_buy_time: privatePool?.start_buy_time,
        pri_end_buy_time: privatePool?.end_buy_time,
        pri_start_fcfs_time: privatePool?.start_fcfs_time,
        pri_end_refund_time: privatePool?.end_refund_time,
        pri_min_amount: privatePool?.min_amount || "",
        pri_fcfs_amount: privatePool?.fcfs_amount || "",

        pub_is_deployed: publicPool?.is_deployed,
        pub_address: publicPool?.address || "",
        pub_token_allocated: publicPool?.token_allocated || "",
        pub_conversion_rate: publicPool?.conversion_rate || "",
        pub_receiver_address: publicPool?.receiver_address || "",
        pub_start_buy_time: publicPool?.start_buy_time,
        pub_end_buy_time: publicPool?.end_buy_time,
        pub_start_fcfs_time: publicPool?.start_fcfs_time,
        pub_end_refund_time: publicPool?.end_refund_time,
        pub_min_amount: publicPool?.min_amount || "",
        pub_fcfs_amount: publicPool?.fcfs_amount || "",

        tokenominc_development: tokenomics?.development || "",
        tokenominc_marketing: tokenomics?.marketing || "",
        tokenominc_operations: tokenomics?.operations || "",
        tokenominc_dex_pool: tokenomics?.dex_pool || "",
        tokenominc_token_sale: tokenomics?.token_sale || "",
        tokenominc_team: tokenomics?.team || "",
        tokenominc_advisory: tokenomics?.advisory || "",
        tokenominc_partnerships: tokenomics?.partnerships || "",
        tokenominc_community: tokenomics?.community || "",
        tokenominc_legal: tokenomics?.legal || "",
      };

      setPoolData(formData);
    };
    getData();
  }, [params]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-center text-28/40 font-semibold">INITIAL DEX OFFERING (IDO)</p>

        <div className="mx-auto w-full max-w-7xl">
          <PoolForm poolData={poolData} isEditing={true} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
