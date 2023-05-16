import clsx from "clsx";
import { PoolTabProps } from ".";
import AcceptCurrency from "../PoolComponents/AcceptCurrency";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import KycRequire from "../PoolComponents/KycRequire";
import MaxFcfsAmount from "../PoolComponents/MaxFcfsAmount";
import MinInvestment from "../PoolComponents/MinInvestment";
import PoolStatus from "../PoolComponents/PoolStatus";
import PrivatePoolAddress from "../PoolComponents/PrivatePoolAddress";
import ReceivingWalletAddress from "../PoolComponents/ReceivingWalletAddress";
import StartWhitelistTime from "../PoolComponents/StartWhitelistTime";
import TokenAllocated from "../PoolComponents/TokenAllocated";
import TokenPrice from "../PoolComponents/TokenPrice";
import StartSaleTime from "../PoolComponents/StartSaleTime";
import EndSaleTime from "../PoolComponents/EndSaleTime";
import EndRefundTime from "../PoolComponents/EndRefundTime";
import TokenAmount from "../PoolComponents/TokenAmount";

const TabPool = (props: PoolTabProps) => {
  const { show = false, control, errors, register, setValue, watch } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="formRow">
          <PrivatePoolAddress
            control={control}
            errors={errors}
            register={register}
          />
          <KycRequire control={control} errors={errors} register={register} />
        </div>

        <div className="formRow">
          <TokenAllocated
            control={control}
            errors={errors}
            register={register}
          />

          <PoolStatus />
        </div>

        <div className="formRow">
          <AcceptCurrency
            control={control}
            errors={errors}
            register={register}
          />
          <TokenPrice control={control} errors={errors} register={register} />
        </div>

        <div className="formRow">
          <MinInvestment
            control={control}
            errors={errors}
            register={register}
          />
          <MaxFcfsAmount
            control={control}
            errors={errors}
            register={register}
          />
        </div>

        <div className="formRow">
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
          <StartSaleTime
            control={control}
            errors={errors}
            register={register}
          />
          <EndSaleTime control={control} errors={errors} register={register} />
        </div>

        <div className="formRow">
          <EndRefundTime
            control={control}
            errors={errors}
            register={register}
          />
          <div className="flex-1"></div>
        </div>

        <TokenAmount />
      </div>
    </div>
  );
};

export default TabPool;
