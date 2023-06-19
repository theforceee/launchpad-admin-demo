import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenContract = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Token Contract</label>

      <TextField control={control} errors={errors} name="token_address" register={register} />
    </div>
  );
};

export default TokenContract;
