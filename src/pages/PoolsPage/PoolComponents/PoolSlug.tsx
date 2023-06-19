import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolSlug = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Slug</label>

      <TextField
        control={control}
        errors={errors}
        name="slug"
        maxLength={{value:30,message:"This field cannot be more than 30 characters"}}
        required
        register={register}
      />
    </div>
  );
};

export default PoolSlug;
