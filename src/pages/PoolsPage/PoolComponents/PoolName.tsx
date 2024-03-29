import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolName = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[400px]">
      <label className="formInputLabel">Project Name</label>

      <TextField
        maxLength={50}
        control={control}
        errors={errors}
        name="name"
        required
        register={register}
      />
    </div>
  );
};

export default PoolName;
