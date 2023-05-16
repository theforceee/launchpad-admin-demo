import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenName = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Token Name</label>

      <TextField
        control={control}
        errors={errors}
        name="token_name"
        // required
        register={register}
      />
    </div>
  );
};

export default TokenName;
