import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenApi = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Coin Data API</label>

      <TextField
        control={control}
        errors={errors}
        name="token_api"
        register={register}
      />
    </div>
  );
};

export default TokenApi;
