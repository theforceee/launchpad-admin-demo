import RadioGroupField from "../../../components/base/RadioGroupField";
import { PoolFieldProps, OptionTypes } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
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
        label="Pool Type"
        control={control}
        errors={errors}
        name="type"
        register={register}
        radioOptions={options}
      />
    </>
  );
};

export default PrivatePoolSetting;
