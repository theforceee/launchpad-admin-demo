import SelectField from "../../../components/base/SelectField";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

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

const AcceptCurrency = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort w-[170px]">Accepted Tokens</label>
      <SelectField
        control={control}
        errors={errors}
        name="accepted_currency"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default AcceptCurrency;
