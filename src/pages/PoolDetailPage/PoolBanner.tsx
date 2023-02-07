import TextField from "../../components/base/TextField";
import { PoolFieldProps } from "../../constants/poolDetail";

const PoolBanner = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <TextField
        label="Pool Banner"
        control={control}
        errors={errors}
        name="banner"
        register={register}
      />
    </>
  );
};

export default PoolBanner;
