import { Button } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { deployPool } from "../../../actions/ido-pool";
import { URLS } from "../../../constants";
import { PoolFieldProps, RegisterInputs, defaultEmptyPool } from "../../../constants/poolDetail";
import { post, put } from "../../../requests";
import TabInfo from "./TabInfo";
import TabMedia from "./TabMedia";
import TabPool from "./TabPool";
import TabToken from "./TabToken";
import TabUserList from "./TabUserList";

export interface PoolTabProps extends PoolFieldProps {
  show: boolean;
  deployPool?: any;
  poolData?: RegisterInputs | undefined;
}

export type PoolFormTypes = {
  isEditing?: boolean | undefined;
  poolData?: RegisterInputs | undefined;
};

type PoolNavTypes = {
  label: string;
  value: number;
};
const poolNav: Array<PoolNavTypes> = [
  {
    label: "INFO",
    value: 1,
  },
  {
    label: "TOKEN",
    value: 2,
  },
  {
    label: "POOL",
    value: 3,
  },
  {
    label: "MEDIA",
    value: 4,
  },
  {
    label: "USER LIST",
    value: 5,
  },
];

const PoolForm = (props: PoolFormTypes) => {
  const { poolData, isEditing } = props;
  const { address: connectedAccount } = useAccount();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
    getValues,
  } = useForm<RegisterInputs>({
    mode: "onChange",
    defaultValues: poolData ?? defaultEmptyPool,
    reValidateMode: "onChange",
  });

  // Mapping data from API to Form
  useEffect(() => {
    if (!poolData) return;
    setValue("name", poolData.name);
    setValue("slug", poolData?.slug);
    setValue("website", poolData?.website);
    setValue("twitter", poolData?.twitter);
    setValue("telegram", poolData?.telegram);
    setValue("discord", poolData?.discord);
    setValue("about", poolData?.about);
    setValue("litepaper", poolData?.litepaper);

    setValue("token_name", poolData?.token_name);
    setValue("token_id", poolData?.token_id);
    setValue("token_address", poolData?.token_address);
    setValue("network", poolData?.network);
    setValue("token_decimal", poolData?.token_decimal);
    setValue("token_data_api", poolData?.token_data_api);
    setValue("total_supply", poolData?.total_supply);
    setValue("token_release", JSON.stringify(poolData.token_release || ""));
    setValue("accepted_currency", poolData?.accepted_currency);
    setValue("require_kyc", poolData?.require_kyc);

    setValue("start_join_time", poolData?.start_join_time);
    setValue("end_join_time", poolData?.end_join_time);
    setValue("allocation_venture_capital", poolData?.allocation_venture_capital);
    setValue("allocation_private", poolData?.allocation_private);
    setValue("allocation_public", poolData?.allocation_public);

    setValue("pri_is_deployed", poolData?.pri_is_deployed);
    setValue("pri_address", poolData?.pri_address);
    setValue("pri_token_allocated", poolData?.pri_token_allocated);
    setValue("pri_conversion_rate", poolData?.pri_conversion_rate);
    setValue("pri_receiver_address", poolData?.pri_receiver_address);
    setValue("pri_start_buy_time", poolData?.pri_start_buy_time);
    setValue("pri_end_buy_time", poolData?.pri_end_buy_time);
    setValue("pri_start_fcfs_time", poolData?.pri_start_fcfs_time);
    setValue("pri_end_refund_time", poolData?.pri_end_refund_time);
    setValue("pri_min_amount", poolData?.pri_min_amount);
    setValue("pri_fcfs_amount", poolData?.pri_fcfs_amount);

    setValue("pub_is_deployed", poolData?.pub_is_deployed);
    setValue("pub_address", poolData?.pub_address);
    setValue("pub_token_allocated", poolData?.pub_token_allocated);
    setValue("pub_conversion_rate", poolData?.pub_conversion_rate);
    setValue("pub_receiver_address", poolData?.pub_receiver_address);
    setValue("pub_start_buy_time", poolData?.pub_start_buy_time);
    setValue("pub_end_buy_time", poolData?.pub_end_buy_time);
    setValue("pub_start_fcfs_time", poolData?.pub_start_fcfs_time);
    setValue("pub_end_refund_time", poolData?.pub_end_refund_time);
    setValue("pub_min_amount", poolData?.pub_min_amount);
    setValue("pub_fcfs_amount", poolData?.pub_fcfs_amount);

    setValue("tokenominc_development", poolData?.tokenominc_development);
    setValue("tokenominc_marketing", poolData?.tokenominc_marketing);
    setValue("tokenominc_operations", poolData?.tokenominc_operations);
    setValue("tokenominc_dex_pool", poolData?.tokenominc_dex_pool);
    setValue("tokenominc_token_sale", poolData?.tokenominc_token_sale);
    setValue("tokenominc_team", poolData?.tokenominc_team);
    setValue("tokenominc_advisory", poolData?.tokenominc_advisory);
    setValue("tokenominc_partnerships", poolData?.tokenominc_partnerships);
    setValue("tokenominc_community", poolData?.tokenominc_community);
    setValue("tokenominc_legal", poolData?.tokenominc_legal);

    setValue("signer", JSON.stringify(poolData.signer || ""));
  }, [poolData]);

  const [selectedNav, setSelectedNav] = useState<number>(1);

  const handleChangeNav = (navValue: number) => {
    setSelectedNav(navValue);
  };

  const convertFormData = (data: RegisterInputs) => {
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

  const createUpdatePool = async (data: RegisterInputs) => {
    console.log("%cformData", "color:blue", data);

    const payload = convertFormData(data);
    console.log("%c createUpdatePool", "color:red", payload);

    if (isEditing) {
      // Update Pool
      const updateRes = await put(`/pool/${data.slug}`, {
        body: payload,
      });
      if (updateRes.status !== 200) {
        toast.error("ERROR: Pool failed to be updated");
        return;
      }

      toast.success("SUCCESS: pool has been updated");
      window.location.reload();
    } else {
      // Create Pool
      const createRes = await post("/pool", {
        body: payload,
      });
      if (createRes.status !== 200) {
        toast.error("ERROR: Pool failed to be created");
        return;
      }

      toast.success("SUCCESS: pool has been created");
      navigate(URLS.POOLS);
    }
  };

  const handleDeployPool = async (poolType: "public" | "private") => {
    if (!connectedAccount) {
      toast.error("ERROR: please connect wallet");
      return;
    }

    toast.info(`Deploying ${poolType} pool`);
    const deployData = convertFormData(getValues());
    await deployPool(deployData, poolType);
  };

  const onSubmit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
    // console.log(data, errors);
    createUpdatePool(data);
  };

  return (
    <div className="flex flex-col">
      <div className="my-5 flex justify-center">
        {poolNav.map((item: PoolNavTypes) => (
          <div
            key={item.value}
            className={clsx(
              "flex flex-1 cursor-pointer items-center justify-center text-20/28 font-medium",
              selectedNav === item.value ? "text-[#606060]" : "text-[#D9D9D9]",
            )}
            onClick={() => handleChangeNav(item.value)}
          >
            <span className={selectedNav === item.value ? "border-b-8 border-[#606060]" : ""}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div className="w-full">
          <TabInfo
            show={selectedNav === 1}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            poolData={poolData}
            isEditing={isEditing}
          />
          <TabToken
            show={selectedNav === 2}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            poolData={poolData}
          />
          <TabPool
            show={selectedNav === 3}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            deployPool={handleDeployPool}
            poolData={poolData}
            isEditing={isEditing}
          />
          <TabMedia
            show={selectedNav === 4}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            poolData={poolData}
          />
          <TabUserList
            show={selectedNav === 5}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            poolData={poolData}
          />
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-5">
          <Button onClick={() => reset()} variant={"contained"} size="large" color="secondary">
            Reset
          </Button>
          <Button
            onClick={() => handleSubmit(onSubmit)}
            type="submit"
            variant="contained"
            size="large"
            color="warning"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PoolForm;
