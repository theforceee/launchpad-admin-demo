import { useMemo } from "react";
import SelectField from "../../../components/base/SelectField";
import { ChainId, MAPPING_NETWORK_ID_BY_NAME, SUPPORTED_NETWORKS } from "../../../constants";
import { PoolFieldProps } from "../../../constants/poolDetail";

const AcceptCurrency = (props: PoolFieldProps) => {
  const { control, errors, register, watch } = props;
  const networkAvailable = watch?.("network");

  const currencyOptions = useMemo(() => {
    if (!networkAvailable) return [];
    const poolNetworkId: ChainId = MAPPING_NETWORK_ID_BY_NAME[networkAvailable];

    return SUPPORTED_NETWORKS[poolNetworkId]?.currencies || [];
  }, [networkAvailable]);

  return (
    <div className="flex w-[320px]">
      <label className="formInputLabel">Accepted Tokens</label>
      <SelectField
        control={control}
        errors={errors}
        name="accepted_currency"
        register={register}
        selectOptions={currencyOptions}
      />
    </div>
  );
};

export default AcceptCurrency;
