import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

// all pool properties
export type RegisterInputs = {
  title: string;
  banner: string;
  website: string;
  tokenSymbol: string;
  tokenIcon: string;
  totalSoldCoin: string;
};

export type PoolFieldProps = {
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
};

export type InputFieldProps = {
  label: string;
  name: keyof RegisterInputs;
  control: Control<RegisterInputs, any>;
  register: UseFormRegister<RegisterInputs>;
  errors: FieldErrors<RegisterInputs>;
  required?: boolean;
  placeholder?: string | undefined;
};
