import RadioGroupField from "../../../components/base/RadioGroupField";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Yes",
    value: "1",
  },
  {
    label: "No",
    value: "2",
  },
];

const Featured = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Featured?</label>

      <RadioGroupField
        label="Buy Type"
        control={control}
        errors={errors}
        name="buyType"
        register={register}
        radioOptions={options}
      />
    </div>
  );
};

export default Featured;
