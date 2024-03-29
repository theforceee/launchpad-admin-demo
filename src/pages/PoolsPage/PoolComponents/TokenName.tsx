import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenName = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[364px]">
      <label className="formInputLabel">Token Name</label>

      <TextField
        maxLength={50}
        control={control}
        errors={errors}
        name="token_name"
        required
        register={register}
      />
    </div>
  );
};

export default TokenName;
