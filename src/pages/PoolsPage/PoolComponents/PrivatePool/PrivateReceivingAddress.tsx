import TextField from "../../../../components/base/TextField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateReceivingAddress = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex max-w-2xl flex-1">
      <label className="formInputLabel">Receiving Wallet Address</label>

      <TextField
        control={control}
        errors={errors}
        name="pri_receiver_address"
        register={register}
      />
    </div>
  );
};

export default PrivateReceivingAddress;
