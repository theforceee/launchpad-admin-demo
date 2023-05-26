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
        required
        register={register}
      />
    </div>
  );
};

export default PoolSlug;
