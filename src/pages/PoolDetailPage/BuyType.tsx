import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, OptionTypes } from "../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Whitelist Lottery",
    value: "1",
  },
  {
    label: "FCFS",
    value: "2",
  },
];

const BuyType = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Buy Type"
        control={control}
        errors={errors}
        name="buyType"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default BuyType;
