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
  description: string;
  banner: string;
  website: string;
  network: string;
  token_network: string;
  token_symbol: string;
  token_logo: string;
  totalSoldCoin: string;
  buyType: string;
  accepted_currency: string;
  airdropNetwork: string;
  status: string;

  start_whitelist_time: string | undefined;
  end_whitelist_time: string | undefined;
  start_join_time: string | undefined;
  end_join_time: string | undefined;
  start_buy_time: string | undefined;
  end_buy_time: string | undefined;
  start_free_buy_time: string | undefined;
  free_buy_time_bonus: string | undefined;

  release_type?: string;
  release_policy?: string;
  exampleSelect?: string;
};

export const defaultEmptyPool: RegisterInputs = {
  title: "",
  slug: "",
  website: "",
  banner: "",
  token_logo: "",
  token_symbol: "",
  description: "",
  start_whitelist_time: "",
  end_whitelist_time: "",
  end_buy_time: "",
  end_join_time: "",
  free_buy_time_bonus: "",
  start_buy_time: "",
  start_free_buy_time: "",
  release_policy: "",
  release_type: "",
  totalSoldCoin: "",
  buyType: "",
  accepted_currency: "",
  airdropNetwork: "",
  token_network: "",
  type: "",
  network: "",
  status: "",
  start_join_time: "",
  exampleSelect: "",
};

export type PoolFieldProps = {
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
  watch?: UseFormWatch<RegisterInputs>;
};

export type InputFieldProps = {
  label: string;
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
