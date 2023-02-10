import SelectField from "../../components/base/SelectField";
import { OptionTypes, PoolFieldProps } from "../../constants/poolDetail";

const options: Array<OptionTypes> = [
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

const ExampleSelect = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <SelectField
        label="Example Select"
        control={control}
        errors={errors}
        name="exampleSelect"
        register={register}
        selectOptions={options}
      />
    </>
  );
};

export default ExampleSelect;
