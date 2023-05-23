import RadioGroupField from "../../../components/base/RadioGroupField";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Yes",
    value: "true",
  },
  {
    label: "No",
    value: "false",
  },
];

const Featured = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Featured?</label>

      <RadioGroupField
        control={control}
        errors={errors}
        name="is_featured"
        register={register}
        radioOptions={options}
      />
    </div>
  );
};

export default Featured;
