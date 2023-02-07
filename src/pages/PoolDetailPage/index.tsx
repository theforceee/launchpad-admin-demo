import { SubmitHandler, useForm } from "react-hook-form";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
import PoolBanner from "./PoolBanner";
import PoolName from "./PoolName";
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
  };

  const {
    register,
    setValue,
    getValues,
    clearErrors,
    handleSubmit,
    control,
    watch,
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
              />
            </div>

            <div className="formSection"></div>

            <input type={"submit"} title="Enter" />
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
