import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, RadioOptionTypes } from "../../constants/poolDetail";

const options: Array<RadioOptionTypes> = [
  {
    label: "Ether",
    value: "eth",
  },
  {
    label: "BSC",
    value: "bsc",
  },
  {
    label: "Polygon",
    value: "matic",
  },
  {
    label: "Solana",
    value: "sol",
  },
  {
    label: "Terra",
    value: "luna",
  },
  {
    label: "Fantom",
    value: "ftm",
  },
  {
    label: "Avalanche",
    value: "avax",
  },
];

const NetworkAvailable = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="NetworkAvailable"
        control={control}
        errors={errors}
        name="networkAvailable"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default NetworkAvailable;
