import SelectField from "../../../../components/base/SelectField";
import { OptionTypes, PoolFieldProps } from "../../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "USDT",
    value: "1",
  },
  {
    label: "USDC",
    value: "2",
  },
  {
    label: "ETH",
    value: "3",
  },
];

const Public = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[320px]">
      <label className="formInputLabel">Accepted Tokens</label>
      <SelectField
        control={control}
        errors={errors}
        name="pub_accepted_currency"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default Public;
