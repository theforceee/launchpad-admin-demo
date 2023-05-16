import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TotalSoldCoin = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex w-[400px]">
      <label className="formInputLabel">Total Sale Supply</label>
      <NumberField
        control={control}
        errors={errors}
        name="totalSoldCoin"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default TotalSoldCoin;
