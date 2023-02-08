import RadioGroupField from "../../components/base/RadioGroupField";
import { PoolFieldProps, RadioOptionTypes } from "../../constants/poolDetail";

const options: Array<RadioOptionTypes> = [
  {
    label: "Public",
    value: "1",
  },
  {
    label: "Private",
    value: "2",
  },
  {
    label: "Seed",
    value: "3",
  },
  {
    label: "Community",
    value: "4",
  },
  {
    label: "Event",
    value: "5",
  },
];

const PrivatePoolSetting = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <>
      <RadioGroupField
        label="Private Pool Setting"
        control={control}
        errors={errors}
        name="is_private"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default PrivatePoolSetting;
