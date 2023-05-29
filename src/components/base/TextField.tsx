import { Controller, useController } from "react-hook-form";
import { InputFieldProps } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const TextField = (props: InputFieldProps) => {
  const { name, control, register, errors, required, placeholder } = props;

  const { field } = useController({
    name,
    rules: { required },
    control,
  });

  return (
    <div className="flex w-full flex-col">
      <input
        {...field}
        type="text"
        name={name}
        className="formInputText"
        placeholder={placeholder}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default TextField;
