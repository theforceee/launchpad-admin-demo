import { ChangeEvent } from "react";
import { Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { InputFieldProps, RegisterInputs } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const SEPARATOR = ",";

const NumberField = (props: InputFieldProps) => {
  const { name, control, errors, required, placeholder, setValue } = props;

  const handleChangeNumber = (
    event: ChangeEvent<HTMLInputElement> | undefined,
    name: keyof RegisterInputs,
  ) => {
    const inputValue = event?.target.value || "";
    const newValue = inputValue.split(SEPARATOR).join("");
    setValue && setValue(name, newValue);
  };

  return (
    <div className="flex flex-col w-full">
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { name } }) => (
          <NumericFormat
            name={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChangeNumber(event, name)
            }
            thousandSeparator={true}
            className="formInputText"
            placeholder={placeholder}
          />
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default NumberField;
