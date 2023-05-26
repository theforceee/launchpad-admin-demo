import NumberField from "../../../../components/base/NumberField";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateTokenAllocated = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex w-[400px]">
      <label className="formInputLabel">Tokens Allocated</label>
      <NumberField
        control={control}
        errors={errors}
        name="pri_token_allocated"
        register={register}
        setValue={setValue}
        placeholder="Please enter a number"
      />
    </div>
  );
};

export default PrivateTokenAllocated;
