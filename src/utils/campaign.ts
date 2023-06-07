import { BigNumber } from "ethers";
import { RegisterInputs } from "../constants/poolDetail";

function countDecimals(value: number) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
}

export function getCurrencyToTokenRate(
  tokenPrice: number,
  tokenDecimals: number,
  currencyDecimals: number,
  rateDecimals = 30,
) {
  return BigNumber.from("1")
    .mul(BigNumber.from(10).pow(tokenDecimals - currencyDecimals + rateDecimals))
    .mul(Math.pow(10, countDecimals(tokenPrice)))
    .div(tokenPrice * Math.pow(10, countDecimals(tokenPrice)));
}

export const convertFormData = (data: RegisterInputs) => {
  return {
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
      token_release: JSON.parse(data.token_release || "{}"), // time config
    },

    pools: [
      {
        is_deployed: data.pri_is_deployed,
        is_private: true,
        address: data.pri_address,
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
        is_deployed: data.pub_is_deployed,
        is_private: false,
        address: data.pub_address,
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
