import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenDecimal = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Token Decimal</label>

      <NumberField
        control={control}
        errors={errors}
        name="token_decimal"
        register={register}
        setValue={setValue}
      />
    </div>
  );
};

export default TokenDecimal;