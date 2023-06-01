import SelectField from "../../../components/base/SelectField";
import { acceptedCurrencies } from "../../../constants";
import { PoolFieldProps } from "../../../constants/poolDetail";

const AcceptCurrency = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex w-[320px]">
      <label className="formInputLabel">Accepted Tokens</label>
      <SelectField
        control={control}
        errors={errors}
        name="accepted_currency"
        register={register}
        selectOptions={acceptedCurrencies}
      />
    </div>
  );
};

export default AcceptCurrency;
