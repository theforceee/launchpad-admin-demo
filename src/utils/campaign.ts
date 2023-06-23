import { BigNumber } from "ethers";
import { RegisterInputs, defaultEmptyPool } from "../constants/poolDetail";

function countDecimals(value: number) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
}

// Price (token to currency): 1 token = x currency
// Rate (currency to token): 1 currency = 1 / x token
export function getCurrencyToTokenRate(
  tokenPrice: number,
  tokenDecimals: number,
  currencyDecimals: number,
  rateDecimals = 30,
) {
  return BigNumber.from("1")
    .mul(BigNumber.from(10).pow(tokenDecimals - currencyDecimals + rateDecimals))
    .mul(Math.pow(10, countDecimals(tokenPrice)))
    .div(Math.floor(tokenPrice * Math.pow(10, countDecimals(tokenPrice))));
}

export const convertFormDataToApi = (data: RegisterInputs) => {
  return {
    id: data.id,
    is_live: data.is_live === "true",
    signer: JSON.parse(data.signer || "{}"),
    name: data.name,
    slug: data.slug,
    website: data.website,
    twitter: data.twitter,
    telegram: data.telegram,
    discord: data.discord,
    about: data.about,
    litepaper: data.litepaper,
    tags: data.tags,

    start_join_time: data.start_join_time,
    end_join_time: data.end_join_time,
    accepted_currency: data.accepted_currency,
    require_kyc: data.require_kyc === "true",

    token: {
      token_name: data.token_name,
      token_id: data.token_id,
      token_address: data.token_address,
      network: data.network,
      token_decimal: data.token_decimal,
      token_data_api: data.token_data_api,
      total_supply: data.total_supply,
      tokenomics: {
        development: data.tokenominc_development,
        marketing: data.tokenominc_marketing,
        operations: data.tokenominc_operations,
        dex_pool: data.tokenominc_dex_pool,
        token_sale: data.tokenominc_token_sale,
        team: data.tokenominc_team,
        advisory: data.tokenominc_advisory,
        partnerships: data.tokenominc_partnerships,
        community: data.tokenominc_community,
        legal: data.tokenominc_legal,
      },
      token_sale_allocation: {
        venture_capital: data.allocation_venture_capital,
        private: data.allocation_private,
        public: data.allocation_public,
      },
      token_release: JSON.parse(data.tokenReleases || data.token_release || "{}"),
      tokenReleases: JSON.parse(data.tokenReleases || data.token_release || "{}"),
    },

    pools: [
      {
        is_deployed: false,
        is_private: true,
        address: "",
        token_allocated: data.pri_token_allocated,
        conversion_rate: data.pri_conversion_rate,
        receiver_address: data.pri_receiver_address,
        start_buy_time: data.pri_start_buy_time,
        end_buy_time: data.pri_end_buy_time,
        start_fcfs_time: data.pri_start_fcfs_time,
        end_refund_time: data.pri_end_refund_time,
        min_amount: data.pri_min_amount,
        fcfs_amount: data.pri_fcfs_amount,
      },
      {
        is_deployed: false,
        is_private: false,
        address: "",
        token_allocated: data.pub_token_allocated,
        conversion_rate: data.pub_conversion_rate,
        receiver_address: data.pub_receiver_address,
        start_buy_time: data.pub_start_buy_time,
        end_buy_time: data.pub_end_buy_time,
        start_fcfs_time: data.pub_start_fcfs_time,
        end_refund_time: data.pub_end_refund_time,
        min_amount: data.pub_min_amount,
        fcfs_amount: data.pub_fcfs_amount,
      },
    ],
  };
};

export const convertApiDataToForm = (rawData: any) => {
  if (!rawData) return { ...defaultEmptyPool };

  const { token, pools } = rawData;
  const privatePool = pools?.find((pool: any) => pool?.is_private === true);
  const publicPool = pools?.find((pool: any) => pool?.is_private === false);
  const { token_sale_allocation, tokenomics, tokenReleases } = token;

  return {
    id: rawData.id,
    signer: rawData.signer,
    status: rawData.status,
    is_live: rawData.is_live,

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
    tokenReleases: tokenReleases,
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
};
