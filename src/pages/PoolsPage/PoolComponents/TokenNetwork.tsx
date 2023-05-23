import SelectField from "../../../components/base/SelectField";
import { OptionTypes, PoolFieldProps } from "../../../constants/poolDetail";

const options: Array<OptionTypes> = [
  {
    label: "Ether",
    value: "eth",
  },
  {
    label: "BSC",
    value: "bsc",
  },
  {
    label: "Polygon",
    value: "matic",
  },
  {
    label: "Solana",
    value: "sol",
  },
  {
    label: "Terra",
    value: "luna",
  },
  {
    label: "Fantom",
    value: "ftm",
  },
  {
    label: "Avalanche",
    value: "avax",
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
        name="token_network"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default TokenNetwork;
