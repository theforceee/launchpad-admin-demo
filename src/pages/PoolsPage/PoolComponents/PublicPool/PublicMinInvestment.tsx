import NumberField from "../../../../components/base/NumberField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PublicMinInvestment = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Minimum Investment</label>
      <NumberField
        control={control}
        errors={errors}
        name="pub_min_amount"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default PublicMinInvestment;
