import { RangePickerProps } from "antd/lib/date-picker";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  Validate,
} from "react-hook-form";

// all pool properties
export type RegisterInputs = {
  type: string;
  title: string;
  slug: string;
  about: string;
  litepaper: string;
  banner: string;
  is_featured: string;

  website: string;
  twitter: string;
  telegram: string;
  discord: string;

  network: string;
  token_address: string;
  token_network: string;
  token_symbol: string;
  token_decimal: string;
  token_name: string;
  token_id: string;
  token_data_api: string;
  token_logo: string;
  token_price: string;
  totalSoldCoin: string;
  buyType: string;
  accepted_currency: string;
  status: string;

  pool_private_address: string;
  require_kyc: string;
  token_allocated: string;
  min_investment: string;
  max_investment: string;

  start_join_time: string | undefined;
  end_join_time: string | undefined;
  start_whitelist_time: string | undefined;
  end_whitelist_time: string | undefined;
  start_buy_time: string | undefined;
  end_buy_time: string | undefined;
  end_refund_time: string | undefined;
  start_fcfs_time: string | undefined;
  free_buy_time_bonus: string | undefined;

  release_type?: string;
  release_policy?: string;
  exampleSelect?: string;
};

export const defaultEmptyPool: RegisterInputs = {
  title: "",
  slug: "",
  is_featured: "",

  website: "",
  twitter: "",
  telegram: "",
  discord: "",

  about: "",
  litepaper: "",
  banner: "",
  token_logo: "",
  token_symbol: "",
  token_address: "",
  token_decimal: "",
  token_name: "",
  token_id: "",
  token_data_api: "",
  token_price: "",

  pool_private_address: "",
  require_kyc: "",
  token_allocated: "",
  min_investment: "",
  max_investment: "",

  start_whitelist_time: "",
  end_whitelist_time: "",
  end_buy_time: "",
  end_refund_time: "",
  end_join_time: "",
  free_buy_time_bonus: "",
  start_buy_time: "",
  start_fcfs_time: "",
  release_policy: "",
  release_type: "",
  totalSoldCoin: "",
  buyType: "",
  accepted_currency: "",
  token_network: "",
  type: "",
  network: "",
  status: "",
  start_join_time: "",
  exampleSelect: "",
};

export interface PoolFieldProps {
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
  watch?: UseFormWatch<RegisterInputs>;
}

export type InputFieldProps = {
  label?: string;
  name: keyof RegisterInputs;
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
  required?: boolean;
  placeholder?: string | undefined;
  radioOptions?: Array<OptionTypes>;
  selectOptions?: Array<OptionTypes>;
  validate?:
    | Validate<string | undefined, RegisterInputs>
    | Record<string, Validate<string | undefined, RegisterInputs>>
    | undefined;
  disabledDate?: RangePickerProps["disabledDate"] | undefined;
};

export type OptionTypes = {
  label: string;
  value: string;
};
export type BooleanOptionTypes = {
  label: string;
  value: boolean;
};
