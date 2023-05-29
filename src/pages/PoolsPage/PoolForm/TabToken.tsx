import clsx from "clsx";
import { PoolTabProps } from ".";
import Allocations from "../PoolComponents/Allocations";
import ClaimEmissions from "../PoolComponents/ClaimEmissions";
import TokenApi from "../PoolComponents/TokenApi";
import TokenContract from "../PoolComponents/TokenContract";
import TokenDecimal from "../PoolComponents/TokenDecimal";
import TokenID from "../PoolComponents/TokenID";
import TokenName from "../PoolComponents/TokenName";
import TokenNetwork from "../PoolComponents/TokenNetwork";
import Tokennomics from "../PoolComponents/Tokennomics";
import TotalSupply from "../PoolComponents/TotalSupply";

const TabToken = (props: PoolTabProps) => {
  const { show = false, control, errors, register, setValue, poolData } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="formRow">
          <TokenName control={control} errors={errors} register={register} />
          <TokenID control={control} errors={errors} register={register} />
          <TokenContract
            control={control}
            errors={errors}
            register={register}
          />
        </div>
        <div className="formRow">
          <TokenNetwork control={control} errors={errors} register={register} />
          <TokenDecimal
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
          />
          <TokenApi control={control} errors={errors} register={register} />
        </div>

        <TotalSupply
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
        />

        <div className="flex">
          <Tokennomics
            setValue={setValue}
            control={control}
            errors={errors}
            register={register}
          />
          <ClaimEmissions
            setValue={setValue}
            control={control}
            errors={errors}
            register={register}
            poolData={poolData}
          />
          <Allocations
            setValue={setValue}
            control={control}
            errors={errors}
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default TabToken;
