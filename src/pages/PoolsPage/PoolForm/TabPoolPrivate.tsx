import clsx from "clsx";
import { PoolTabProps } from ".";
import AcceptCurrency from "../PoolComponents/AcceptCurrency";
import ButtonDeploy from "../PoolComponents/ButtonDeploy";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import KycRequire from "../PoolComponents/KycRequire";
import PoolStatus from "../PoolComponents/PoolStatus";
import PrivateEndRefundTime from "../PoolComponents/PrivatePool/PrivateEndRefundTime";
import PrivateEndSaleTime from "../PoolComponents/PrivatePool/PrivateEndSaleTime";
import PrivateMaxFcfsAmount from "../PoolComponents/PrivatePool/PrivateMaxFcfsAmount";
import PrivateMinInvestment from "../PoolComponents/PrivatePool/PrivateMinInvestment";
import PrivatePoolAddress from "../PoolComponents/PrivatePool/PrivatePoolAddress";
import PrivateReceivingAddress from "../PoolComponents/PrivatePool/PrivateReceivingAddress";
import PrivateRefundAmount from "../PoolComponents/PrivatePool/PrivateRefundAmount";
import PrivateStartSaleTime from "../PoolComponents/PrivatePool/PrivateStartSaleTime";
import PrivateTokenAllocated from "../PoolComponents/PrivatePool/PrivateTokenAllocated";
import PrivateTokenPrice from "../PoolComponents/PrivatePool/PrivateTokenPrice";
import StartWhitelistTime from "../PoolComponents/StartWhitelistTime";
import TokenAmount from "../PoolComponents/TokenAmount";

const TabPoolPrivate = (props: PoolTabProps) => {
  const { show = false, control, errors, register, setValue, watch, deployPool, isEditing } = props;

  const isDeployed = watch?.("pri_is_deployed");

  return (
    <div className={clsx("flex flex-col", show ? "block" : "hidden")}>
      <div className="formRow mt-10">
        <PrivatePoolAddress
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <KycRequire control={control} errors={errors} register={register} setValue={setValue} />
      </div>

      <div className="formRow">
        <PrivateTokenAllocated
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />

        {isDeployed && <PoolStatus />}
      </div>

      <div className="formRow">
        <AcceptCurrency control={control} errors={errors} register={register} setValue={setValue} />
        <PrivateTokenPrice
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PrivateMinInvestment
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <PrivateMaxFcfsAmount
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PrivateReceivingAddress
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <StartWhitelistTime
          control={control}
          watch={watch}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <EndWhitelistTime
          control={control}
          watch={watch}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PrivateStartSaleTime
          control={control}
          watch={watch}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <PrivateEndSaleTime
          control={control}
          watch={watch}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PrivateEndRefundTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <div className="flex w-full flex-1">
          <ButtonDeploy
            deployPool={deployPool}
            isDeployed={isDeployed}
            isEditing={isEditing}
            poolType="private"
          />
        </div>
      </div>

      {isDeployed && (
        <>
          <div className="formRow">
            <PrivateRefundAmount
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
          </div>

          <TokenAmount />
        </>
      )}
    </div>
  );
};

export default TabPoolPrivate;
