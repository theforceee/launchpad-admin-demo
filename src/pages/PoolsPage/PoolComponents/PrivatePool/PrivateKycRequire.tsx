import RadioGroupField from "../../../../components/base/RadioGroupField";
import { OptionTypes, PoolFieldProps } from "../../../../constants/poolDetail";

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

const PrivateKycRequire = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex">
      <label className="formInputLabelShort">Requires KYC</label>

      <RadioGroupField
        control={control}
        errors={errors}
        name="pri_require_kyc"
        register={register}
        radioOptions={options}
      />
    </div>
  );
};

export default PrivateKycRequire;