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
  id: number | undefined;
  name: string;
  slug: string;
  website: string;
  twitter: string;
  telegram: string;
  discord: string;
  about: string;
  litepaper: string;
  tags: string;

  token_name: string;
  token_id: string;
  token_address: string;
  network: string;
  token_decimal: string;
  token_data_api: string;
  total_supply: string;
  tokenReleases: string | undefined;
  token_release: string | undefined;
  accepted_currency: string | undefined;
  require_kyc: string | undefined;

  start_join_time?: string | undefined;
  end_join_time?: string | undefined;
  allocation_venture_capital: string;
  allocation_private: string;
  allocation_public: string;

  pri_is_deployed?: boolean | undefined;
  pri_address: string | undefined;
  pri_token_allocated: string | undefined;
  pri_conversion_rate: string | undefined;
  pri_receiver_address: string | undefined;
  pri_start_buy_time: string;
  pri_end_buy_time: string;
  pri_start_fcfs_time: string;
  pri_end_refund_time: string;
  pri_min_amount: string;
  pri_fcfs_amount: string;

  pub_is_deployed?: boolean | undefined;
  pub_address: string | undefined;
  pub_token_allocated: string | undefined;
  pub_conversion_rate: string | undefined;
  pub_receiver_address: string | undefined;
  pub_start_buy_time: string | undefined;
  pub_end_buy_time: string | undefined;
  pub_start_fcfs_time: string | undefined;
  pub_end_refund_time: string | undefined;
  pub_min_amount: string | undefined;
  pub_fcfs_amount: string | undefined;

  tokenominc_development: string | undefined;
  tokenominc_marketing: string | undefined;
  tokenominc_operations: string | undefined;
  tokenominc_dex_pool: string | undefined;
  tokenominc_token_sale: string | undefined;
  tokenominc_team: string | undefined;
  tokenominc_advisory: string | undefined;
  tokenominc_partnerships: string | undefined;
  tokenominc_community: string | undefined;
  tokenominc_legal: string | undefined;

  status: string;
  signer?: any;
};

export const defaultEmptyPool: RegisterInputs = {
  id: undefined,
  name: "",
  slug: "",
  website: "",
  twitter: "",
  telegram: "",
  discord: "",
  about: "",
  litepaper: "",
  tags: "",

  token_name: "",
  token_id: "",
  token_address: "",
  network: "",
  token_decimal: "",
  token_data_api: "",
  total_supply: "",
  token_release: undefined,
  tokenReleases: undefined,
  accepted_currency: "",
  require_kyc: "",

  start_join_time: undefined,
  end_join_time: undefined,
  allocation_private: "",
  allocation_public: "",
  allocation_venture_capital: "",

  pri_address: "",
  pri_token_allocated: "",
  pri_conversion_rate: "",
  pri_receiver_address: "",
  pri_start_buy_time: "",
  pri_end_buy_time: "",
  pri_start_fcfs_time: "",
  pri_end_refund_time: "",
  pri_min_amount: "",
  pri_fcfs_amount: "",

  pub_address: "",
  pub_token_allocated: "",
  pub_conversion_rate: "",
  pub_receiver_address: "",
  pub_start_buy_time: "",
  pub_end_buy_time: "",
  pub_start_fcfs_time: "",
  pub_end_refund_time: "",
  pub_min_amount: "",
  pub_fcfs_amount: "",

  tokenominc_development: "",
  tokenominc_marketing: "",
  tokenominc_operations: "",
  tokenominc_dex_pool: "",
  tokenominc_token_sale: "",
  tokenominc_team: "",
  tokenominc_advisory: "",
  tokenominc_partnerships: "",
  tokenominc_community: "",
  tokenominc_legal: "",

  status: "",
};

export interface PoolFieldProps {
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
  watch?: UseFormWatch<RegisterInputs>;
  poolData?: RegisterInputs;
  isEditing?: boolean | undefined;
}

export type InputFieldProps = {
  label?: string;
  name: keyof RegisterInputs;
  disabled?: boolean | undefined;
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
  required?: boolean;
  placeholder?: string | undefined;
  radioOptions?: Array<OptionTypes>;
  selectOptions?: Array<OptionTypes>;
  defaultValue?: any;
  validate?:
    | Validate<string | undefined, RegisterInputs>
    | Record<string, Validate<string | undefined, RegisterInputs>>
    | undefined;
  disabledDate?: RangePickerProps["disabledDate"] | undefined;
  maxLength?: number | undefined;
  max?: number | undefined;
};

export type OptionTypes = {
  label: string;
  value: string;
};
export type BooleanOptionTypes = {
  label: string;
  value: boolean;
};
