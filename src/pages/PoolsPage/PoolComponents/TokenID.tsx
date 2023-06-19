import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenID = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Token ID</label>

      <TextField
        control={control}
        errors={errors}
        name="token_id"
        required
        register={register}
        maxLength={30}
      />
    </div>
  );
};

export default TokenID;
