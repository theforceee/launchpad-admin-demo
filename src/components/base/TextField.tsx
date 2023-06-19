import { useController } from "react-hook-form";
import { InputFieldProps } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const TextField = (props: InputFieldProps) => {
  const { name, control, errors, required, placeholder, disabled, maxLength } = props;
const maxLengthValidate = {value: Number(maxLength), message: `This field cannot be more than ${maxLength} characters`};
  const { field } = useController({
    name,
    rules: { required, maxLength:maxLengthValidate },
    control,
  });

  return (
    <div className="flex w-full flex-col">
      <input
        {...field}
        type="text"
        name={name}
        disabled={disabled}
        className="formInputText"
        placeholder={placeholder}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default TextField;
