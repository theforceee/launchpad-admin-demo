import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
import AcceptCurrency from "./AcceptCurrency";
import AirdropNetwork from "./AirdropNetwork";
import BuyType from "./BuyType";
import ClaimNetwork from "./ClaimNetwork";
import ExampleSelect from "./ExampleSelect";
import NetworkAvailable from "./NetworkAvailable";
import PoolBanner from "./PoolBanner";
import PoolName from "./PoolName";
import PrivatePoolSetting from "./PrivatePoolSetting";
import StartBuyTime from "./StartBuyTime";
import TokenIcon from "./TokenIcon";
import TokenSymbol from "./TokenSymbol";
import TotalSoldCoin from "./TotalSoldCoin";
import Website from "./Website";

const PoolDetailPage = () => {
  const poolDetails: RegisterInputs = {
    title: "",
    website: "",
    banner: "",
    tokenIcon: "",
    tokenSymbol: "",
    totalSoldCoin: "",
    buyType: "",
    acceptCurrency: "",
    airdropNetwork: "",
    claimNetwork: "",
    is_private: "",
    networkAvailable: "",
    startTime: "",
    exampleSelect: "",
  };

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onChange",
    defaultValues: poolDetails,
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <div className="flex w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div className="grid w-full grid-cols-2 gap-5">
            <div className="formSection">
              <PoolName control={control} errors={errors} register={register} />
              <PoolBanner
                control={control}
                errors={errors}
                register={register}
              />
              <TokenSymbol
                control={control}
                errors={errors}
                register={register}
              />
              <TokenIcon
                control={control}
                errors={errors}
                register={register}
              />
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
                <StartBuyTime
                  control={control}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                />
                <StartBuyTime
                  control={control}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                />
                <StartBuyTime
                  control={control}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                />
                <StartBuyTime
                  control={control}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                />
                <StartBuyTime
                  control={control}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                />
              </div>
            </div>

            <Button
              onClick={() => reset()}
              variant={"contained"}
              size="large"
              color="secondary"
            >
              Reset
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="large"
              color="warning"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
