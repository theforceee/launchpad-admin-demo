import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const ReceivingWalletAddress = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Receiving Wallet Address</label>

      <TextField
        control={control}
        errors={errors}
        name="pool_private_address"
        register={register}
      />
    </div>
  );
};

export default ReceivingWalletAddress;
