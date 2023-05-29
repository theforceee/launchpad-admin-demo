import SelectField from "../../../../components/base/SelectField";
import { acceptedCurrencies } from "../../../../constants";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateAcceptCurrency = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[320px]">
      <label className="formInputLabel">Accepted Tokens</label>
      <SelectField
        control={control}
        errors={errors}
        name="pri_accepted_currency"
        register={register}
        selectOptions={acceptedCurrencies}
      />
    </div>
  );
};

export default PrivateAcceptCurrency;
