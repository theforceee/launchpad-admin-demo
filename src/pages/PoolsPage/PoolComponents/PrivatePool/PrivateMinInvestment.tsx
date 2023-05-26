import NumberField from "../../../../components/base/NumberField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateMinInvestment = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Minimum Investment</label>
      <NumberField
        control={control}
        errors={errors}
        name="pri_min_investment"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default PrivateMinInvestment;
