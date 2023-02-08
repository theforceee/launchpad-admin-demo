import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

// all pool properties
export type RegisterInputs = {
  title: string;
  banner: string;
  website: string;
  tokenSymbol: string;
  tokenIcon: string;
  totalSoldCoin: string;
  buyType: string;
  acceptCurrency: string;
  airdropNetwork: string;
  is_private: string;
  networkAvailable: string;
  claimNetwork: string;
  startTime: string;
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
  radioOptions?: Array<any>;
};

export type RadioOptionTypes = {
  label: string;
  value: string;
};
