import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, RadioOptionTypes } from "../../constants/poolDetail";

const options: Array<RadioOptionTypes> = [
  {
    label: "NONE",
    value: "1",
  },
  {
    label: "SOLANA",
    value: "2",
  },
  {
    label: "TERRA",
    value: "3",
  },
];

const AirdropNetwork = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Airdrop Network"
        control={control}
        errors={errors}
        name="airdropNetwork"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default AirdropNetwork;
