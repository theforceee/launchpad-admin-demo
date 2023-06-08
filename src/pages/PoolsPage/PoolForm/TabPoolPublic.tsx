import clsx from "clsx";
import { useEffect, useMemo } from "react";
import { PoolTabProps } from ".";
import useTokenBalance from "../../../hooks/useTokenBalance";
import AcceptCurrency from "../PoolComponents/AcceptCurrency";
import ButtonDeploy from "../PoolComponents/ButtonDeploy";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import KycRequire from "../PoolComponents/KycRequire";
import PoolStatus from "../PoolComponents/PoolStatus";
import PublicEndRefundTime from "../PoolComponents/PublicPool/PublicEndRefundTime";
import PublicEndSaleTime from "../PoolComponents/PublicPool/PublicEndSaleTime";
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
  const { show = false, control, errors, register, watch, setValue, deployPool, isEditing } = props;

  const poolContractAddress = useMemo(() => watch?.("pub_address"), [watch]);
  const tokenAddress = useMemo(() => watch?.("token_address"), [watch]);
  const networkAvailable = useMemo(() => watch?.("network"), [watch]);
  const tokenAllocated = useMemo(() => watch?.("pub_token_allocated"), [watch]);

  const { getTokenBalance, tokenBalance } = useTokenBalance({
    networkAvailable,
    poolContractAddress,
    tokenAddress,
  });

  useEffect(() => {
    getTokenBalance();
  }, [networkAvailable, poolContractAddress, tokenAddress]);

  const isDeployed = watch?.("pub_is_deployed");

  return (
    <div className={clsx("flex flex-col", show ? "block" : "hidden")}>
      <div className="formRow mt-10">
        <PublicPoolAddress
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <div className="invisible">
          <KycRequire control={control} errors={errors} register={register} setValue={setValue} />
        </div>
      </div>

      <div className="formRow">
        <PublicTokenAllocated
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />

        {isDeployed && <PoolStatus tokenAllocated={tokenAllocated} />}
      </div>

      <div className="formRow">
        <AcceptCurrency control={control} errors={errors} register={register} setValue={setValue} />
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
          setValue={setValue}
        />
        <PublicMaxFcfsAmount
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PublicReceivingAddress
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow invisible">
        <StartWhitelistTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <EndWhitelistTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PublicStartSaleTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <PublicEndSaleTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      </div>

      <div className="formRow">
        <PublicEndRefundTime
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />
        <div className="flex w-full flex-1">
          <ButtonDeploy
            deployPool={deployPool}
            isDeployed={isDeployed}
            poolType="public"
            isEditing={isEditing}
          />
        </div>
      </div>

      {isDeployed && (
        <>
          <div className="formRow">
            <PublicRefundAmount
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
          </div>

          <TokenAmount watch={watch} />
        </>
      )}
    </div>
  );
};

export default TabPoolPublic;
