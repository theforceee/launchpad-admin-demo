import clsx from "clsx";
import { PoolTabProps } from ".";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import PoolStatus from "../PoolComponents/PoolStatus";
import PublicAcceptCurrency from "../PoolComponents/PublicPool/PublicAcceptCurrency";
import PublicEndRefundTime from "../PoolComponents/PublicPool/PublicEndRefundTime";
import PublicEndSaleTime from "../PoolComponents/PublicPool/PublicEndSaleTime";
import PublicKycRequire from "../PoolComponents/PublicPool/PublicKycRequire";
import PublicMaxFcfsAmount from "../PoolComponents/PublicPool/PublicMaxFcfsAmount";
import PublicMinInvestment from "../PoolComponents/PublicPool/PublicMinInvestment";
import PublicPoolAddress from "../PoolComponents/PublicPool/PublicPoolAddress";
import PublicReceivingAddress from "../PoolComponents/PublicPool/PublicReceivingAddress";
import PublicRefundAmount from "../PoolComponents/PublicPool/PublicRefundAmount";
import PublicStartSaleTime from "../PoolComponents/PublicPool/PublicStartSaleTime";
import PublicTokenAllocated from "../PoolComponents/PublicPool/PublicTokenAllocated";
import PublicTokenPrice from "../PoolComponents/PublicPool/PublicTokenPrice";
import StartWhitelistTime from "../PoolComponents/StartWhitelistTime";
import TokenAmount from "../PoolComponents/TokenAmount";

const TabPoolPublic = (props: PoolTabProps) => {
  const {
    show = false,
    control,
    errors,
    register,
    setValue,
    watch,
    deployPool,
  } = props;

  return (
    <div className={clsx("flex flex-col", show ? "block" : "hidden")}>
      <div className="formRow mt-10">
        <PublicPoolAddress
          control={control}
          errors={errors}
          register={register}
        />
        <div className="invisible">
          <PublicKycRequire
            control={control}
            errors={errors}
            register={register}
          />
        </div>
      </div>

      <div className="formRow">
        <PublicTokenAllocated
          control={control}
          errors={errors}
          register={register}
        />

        <PoolStatus />
      </div>

      <div className="formRow">
        <PublicAcceptCurrency
          control={control}
          errors={errors}
          register={register}
        />
        <PublicTokenPrice
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PublicMinInvestment
          control={control}
          errors={errors}
          register={register}
        />
        <PublicMaxFcfsAmount
          control={control}
          errors={errors}
          register={register}
        />
      </div>

      <div className="formRow">
        <PublicReceivingAddress
          control={control}
          errors={errors}
          register={register}
        />
      </div>

      <div className="formRow invisible">
        <StartWhitelistTime
          control={control}
          errors={errors}
          register={register}
        />
        <EndWhitelistTime
          control={control}
          errors={errors}
          register={register}
        />
      </div>

      <div className="formRow">
        <PublicStartSaleTime
          control={control}
          errors={errors}
          register={register}
        />
        <PublicEndSaleTime
          control={control}
          errors={errors}
          register={register}
        />
      </div>

      <div className="formRow">
        <PublicEndRefundTime
          control={control}
          errors={errors}
          register={register}
        />
        <div className="flex w-full flex-1">
          <input
            type="button"
            disabled
            value="Deploy Pool Smart Contract"
            onClick={() => deployPool("private")}
            className="ml-auto h-min w-full max-w-xs cursor-pointer rounded-lg bg-green-500 py-2 font-semibold text-white disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div className="formRow">
        <PublicRefundAmount
          control={control}
          errors={errors}
          register={register}
        />
      </div>

      <TokenAmount />
    </div>
  );
};

export default TabPoolPublic;
