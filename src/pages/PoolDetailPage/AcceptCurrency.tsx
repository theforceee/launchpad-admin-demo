import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, OptionTypes } from "../../constants/poolDetail";

const options: Array<OptionTypes> = [
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
        name="accepted_currency"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default AcceptCurrency;
