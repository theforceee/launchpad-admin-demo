import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

type TokenomicTypes = {
  name: any;
  label: string;
  percent: string;
};

const tokenomics: Array<TokenomicTypes> = [
  {
    name: "tokenominc_development",
    label: "Development",
    percent: "",
  },
  {
    name: "tokenominc_marketing",
    label: "Marketing",
    percent: "",
  },
  {
    name: "tokenominc_operations",
    label: "Operations",
    percent: "",
  },
  {
    name: "tokenominc_dex_pool",
    label: "DEX Pool",
    percent: "",
  },
  {
    name: "tokenominc_token_sale",
    label: "Token Sale",
    percent: "",
  },
  {
    name: "tokenominc_team",
    label: "Team",
    percent: "",
  },
  {
    name: "tokenominc_advisory",
    label: "Advisory",
    percent: "",
  },
  {
    name: "tokenominc_partnerships",
    label: "Partnerships",
    percent: "",
  },
  {
    name: "tokenominc_community",
    label: "Community",
    percent: "",
  },
  {
    name: "tokenominc_legal",
    label: "Legal",
    percent: "",
  },
];

const Tokennomics = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex w-2/5 flex-col">
      <div className="mb-5 pr-10 text-right text-16/24 font-bold text-white">Empty</div>
      {tokenomics.map((item: TokenomicTypes, index: number) => (
        <div className="flex items-center pl-20 text-16/24" key={index}>
          <span className="w-full font-bold text-gray-500">{item.label}</span>

          <NumberField
            setValue={setValue}
            control={control}
            errors={errors}
            name={item.name}
            register={register}
          />
          <span className="ml-3 font-bold">%</span>
        </div>
      ))}
    </div>
  );
};

export default Tokennomics;
