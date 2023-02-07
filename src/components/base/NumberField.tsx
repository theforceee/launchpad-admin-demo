import { Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { InputFieldProps } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const NumberField = (props: InputFieldProps) => {
  const { label, name, control, errors, required, placeholder } = props;

  return (
    <div className="formControl">
      <label className="formInputLabel">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, name, value } }) => (
          <NumericFormat
            name={name}
            value={value}
            onChange={onChange}
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
