import { ChangeEvent } from "react";
import { useController } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { InputFieldProps, RegisterInputs } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

export const SEPARATOR = ",";

const NumberField = (props: InputFieldProps) => {
  const { name, control, errors, required, placeholder, setValue, maxLength } = props;
  const maxLengthValidate = {value: Number(maxLength), message: `This field cannot be more than ${maxLength} characters`};
  const { field } = useController({
    name,
    rules: { required, maxLength:maxLengthValidate },
    control,
  });

  const handleChangeNumber = (
    event: ChangeEvent<HTMLInputElement> | undefined,
    name: keyof RegisterInputs,
  ) => {
    const inputValue = event?.target.value || "";
    const newValue = inputValue.split(SEPARATOR).join("");
    setValue && setValue(name, newValue);
  };

  return (
    <div className="flex w-full flex-col">
      <NumericFormat
        {...field}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeNumber(event, name)}
        thousandSeparator={true}
        className="formInputText"
        placeholder={placeholder}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default NumberField;
