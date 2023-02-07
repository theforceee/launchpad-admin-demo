import TextField from "../../components/base/TextField";
import { PoolFieldProps } from "../../constants/poolDetail";

const TokenIcon = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <TextField
        label="Token Icon"
        control={control}
        errors={errors}
        name="tokenIcon"
        register={register}
      />
    </>
  );
};

export default TokenIcon;
