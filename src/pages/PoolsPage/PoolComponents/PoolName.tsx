import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolName = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[400px]">
      <label className="formInputLabel">Project Name</label>

      <TextField
        maxLength={{value:50,message:"This field cannot be more than 50 characters"}}
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
