import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenAllocated = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex">
      <label className="formInputLabel">Tokens Allocated</label>
      <NumberField
        control={control}
        errors={errors}
        name="token_allocated"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default TokenAllocated;
