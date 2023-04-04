import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterInputs } from "../../../constants/poolDetail";
import AcceptCurrency from "../PoolComponents/AcceptCurrency";
import AirdropNetwork from "../PoolComponents/AirdropNetwork";
import BuyType from "../PoolComponents/BuyType";
import ClaimNetwork from "../PoolComponents/ClaimNetwork";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import ExampleSelect from "../PoolComponents/ExampleSelect";
import NetworkAvailable from "../PoolComponents/NetworkAvailable";
import PoolBanner from "../PoolComponents/PoolBanner";
import PoolDescription from "../PoolComponents/PoolDescription";
import PoolName from "../PoolComponents/PoolName";
import PrivatePoolSetting from "../PoolComponents/PoolType";
import StartBuyTime from "../PoolComponents/StartBuyTime";
import StartWhitelistTime from "../PoolComponents/StartWhitelistTime";
import TokenIcon from "../PoolComponents/TokenIcon";
import TokenSymbol from "../PoolComponents/TokenSymbol";
import TotalSoldCoin from "../PoolComponents/TotalSoldCoin";
import Website from "../PoolComponents/Website";

const defaultEmptyPool: RegisterInputs = {
  title: "",
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

export type PoolFormTypes = {
  poolData?: RegisterInputs | undefined;
};

const PoolForm = (props: PoolFormTypes) => {
  const { poolData } = props;
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onChange",
    defaultValues: poolData ?? defaultEmptyPool,
    reValidateMode: "onChange",
  });

  console.log("errors", errors);
  const onSubmit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
    console.log(data, errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="formSection">
            <PoolName control={control} errors={errors} register={register} />
            <PoolBanner control={control} errors={errors} register={register} />
            <TokenSymbol
              control={control}
              errors={errors}
              register={register}
            />
            <TokenIcon control={control} errors={errors} register={register} />
            <Website control={control} errors={errors} register={register} />
            <TotalSoldCoin
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
          </div>

          <div className="formSection">
            <ExampleSelect
              control={control}
              errors={errors}
              register={register}
            />
          </div>

          <div className="formSection">
            <BuyType
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <PrivatePoolSetting
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <NetworkAvailable
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <ClaimNetwork
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <AcceptCurrency
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <AirdropNetwork
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
          </div>

          <div className="formSection">
            <div className="grid grid-cols-2 gap-x-5">
              <StartWhitelistTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
              <EndWhitelistTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
              <StartBuyTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
              <StartBuyTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
              <StartBuyTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
            </div>
          </div>
        </div>

        <div className="formSection mt-5 min-h-[200px]">
          <PoolDescription
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        </div>

        <div className="grid w-full grid-cols-2 gap-5 mt-10">
          <Button
            onClick={() => reset()}
            variant={"contained"}
            size="large"
            color="secondary"
          >
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
    </>
  );
};

export default PoolForm;
