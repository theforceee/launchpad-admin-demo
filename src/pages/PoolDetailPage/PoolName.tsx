import TextField from "../../components/base/TextField";
import { PoolFieldProps } from "../../constants/poolDetail";

const PoolName = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <TextField
        label="Pool Name"
        control={control}
        errors={errors}
        name="title"
        register={register}
      />
    </>
  );
};

export default PoolName;
