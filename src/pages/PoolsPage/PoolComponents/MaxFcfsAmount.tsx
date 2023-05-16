import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const MaxFcfsAmount = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Maximum FCFS Amount</label>
      <NumberField
        control={control}
        errors={errors}
        name="max_investment"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default MaxFcfsAmount;
