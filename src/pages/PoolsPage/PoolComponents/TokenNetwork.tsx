import SelectField from "../../../components/base/SelectField";
import { NETWORK_AVAILABLE } from "../../../constants";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Ethereum",
    value: NETWORK_AVAILABLE.ETH,
  },
  {
    label: "BSC",
    value: NETWORK_AVAILABLE.BSC,
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
