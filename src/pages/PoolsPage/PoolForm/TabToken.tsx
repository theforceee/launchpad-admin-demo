import clsx from "clsx";
import { PoolTabProps } from ".";
import TokenContract from "../PoolComponents/TokenContract";
import TokenName from "../PoolComponents/TokenName";
import TokenSymbol from "../PoolComponents/TokenSymbol";
import TokenApi from "../PoolComponents/TokenApi";
import TokenDecimal from "../PoolComponents/TokenDecimal";
import TokenNetwork from "../PoolComponents/TokenNetwork";
import TotalSoldCoin from "../PoolComponents/TotalSoldCoin";

const TabToken = (props: PoolTabProps) => {
  const { show = false, control, errors, register, setValue, watch } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="formRow">
          <TokenName control={control} errors={errors} register={register} />
          <TokenSymbol control={control} errors={errors} register={register} />
          <TokenContract
            control={control}
            errors={errors}
            register={register}
          />
        </div>
        <div className="formRow">
          <TokenNetwork control={control} errors={errors} register={register} />
          <TokenDecimal control={control} errors={errors} register={register} />
          <TokenApi control={control} errors={errors} register={register} />
        </div>

        <TotalSoldCoin control={control} errors={errors} register={register} />
      </div>
    </div>
  );
};

export default TabToken;
