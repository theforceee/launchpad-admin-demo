import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const TextField = (props: InputFieldProps) => {
  const { label, name, control, register, errors, required, placeholder } =
    props;

  return (
    <div className="formControl">
      <label className="formInputLabel">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field }) => (
          <input
            {...field}
            {...register(name)}
            type="text"
            name={name}
            className="formInputText"
            placeholder={placeholder}
          />
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default TextField;
