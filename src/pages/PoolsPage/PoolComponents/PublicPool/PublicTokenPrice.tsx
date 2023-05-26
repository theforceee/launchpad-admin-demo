import NumberField from "../../../../components/base/NumberField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PublicTokenPrice = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Price</label>
      <NumberField
        control={control}
        errors={errors}
        name="pub_conversion_rate"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default PublicTokenPrice;
