import SelectField from "../../../components/base/SelectField";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Ether",
    value: "ETHEREUM",
  },
  {
    label: "BSC",
    value: "BSC",
  },
  {
    label: "Polygon",
    value: "POLYGON",
  },
];

const TokenNetwork = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[320px]">
      <label className="formInputLabel">Chain</label>
      <SelectField
        control={control}
        errors={errors}
        name="network"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default TokenNetwork;
