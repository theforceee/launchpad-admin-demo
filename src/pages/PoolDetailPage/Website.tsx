import TextField from "../../components/base/TextField";
import { PoolFieldProps } from "../../constants/poolDetail";

const Website = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <TextField
        label="Website"
        control={control}
        errors={errors}
        name="website"
        register={register}
      />
    </>
  );
};

export default Website;
