import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TotalSupply = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex w-[400px]">
      <label className="formInputLabel">Total Sale Supply</label>
      <NumberField
        control={control}
        errors={errors}
        name="total_supply"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default TotalSupply;
