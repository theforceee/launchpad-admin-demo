import RadioGroupField from "../../../components/base/RadioGroupField";
import { PoolFieldProps, OptionTypes } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Ether",
    value: "eth",
  },
  {
    label: "BSC",
    value: "bsc",
  },
];

const NetworkAvailable = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Pool Network"
        control={control}
        errors={errors}
        name="network"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default NetworkAvailable;
