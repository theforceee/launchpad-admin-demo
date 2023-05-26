import NumberField from "../../../../components/base/NumberField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateMaxFcfsAmount = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Maximum FCFS Amount</label>
      <NumberField
        control={control}
        errors={errors}
        name="pri_fcfs_amount"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default PrivateMaxFcfsAmount;
