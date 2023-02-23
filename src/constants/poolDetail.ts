import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

// all pool properties
export type RegisterInputs = {
  type: string;
  title: string;
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

  start_join_time: string;
  end_join_time: string;
  start_buy_time: string;
  end_buy_time: string;
  start_free_buy_time: string;
  free_buy_time_bonus: string;

  release_type?: string;
  release_policy?: string;
  exampleSelect?: string;
};

export type PoolFieldProps = {
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  setValue?: UseFormSetValue<RegisterInputs>;
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
};

export type OptionTypes = {
  label: string;
  value: string;
};
