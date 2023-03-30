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

const ClaimNetwork = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Token Network"
        control={control}
        errors={errors}
        name="token_network"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default ClaimNetwork;
