import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const TokenSymbol = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <TextField
        label="Token Symbol"
        control={control}
        errors={errors}
        name="token_symbol"
        register={register}
      />
    </>
  );
};

export default TokenSymbol;
