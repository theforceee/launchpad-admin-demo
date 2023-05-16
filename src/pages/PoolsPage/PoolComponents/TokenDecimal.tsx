import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenDecimal = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Token Decimal</label>

      <TextField
        control={control}
        errors={errors}
        name="token_decimal"
        register={register}
      />
    </div>
  );
};

export default TokenDecimal;
