import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, RadioOptionTypes } from "../../constants/poolDetail";

const options: Array<RadioOptionTypes> = [
  {
    label: "USDT",
    value: "1",
  },
  {
    label: "USDC",
    value: "2",
  },
  {
    label: "ETH",
    value: "3",
  },
];

const AcceptCurrency = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Accept Currency"
        control={control}
        errors={errors}
        name="acceptCurrency"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default AcceptCurrency;