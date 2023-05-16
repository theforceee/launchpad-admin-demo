import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenPrice = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Price</label>
      <NumberField
        control={control}
        errors={errors}
        name="token_price"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default TokenPrice;
