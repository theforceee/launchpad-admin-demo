import NumberField from "../../components/base/NumberField";
import { PoolFieldProps } from "../../constants/poolDetail";

const TotalSoldCoin = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <NumberField
        label="Total Sold Coin"
        control={control}
        errors={errors}
        name="totalSoldCoin"
        register={register}
        placeholder="Please enter a number"
      />
    </>
  );
};

export default TotalSoldCoin;
