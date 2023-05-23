import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PrivatePoolAddress = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Private Pool Address</label>

      <TextField
        control={control}
        errors={errors}
        name="pool_private_address"
        register={register}
      />
    </div>
  );
};

export default PrivatePoolAddress;
