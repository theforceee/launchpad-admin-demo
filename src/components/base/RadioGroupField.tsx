import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps, OptionTypes } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const RadioGroupField = (props: InputFieldProps) => {
  const { label, name, control, errors, required, radioOptions } = props;

  return (
    <div className="formControl">
      <label className="formInputLabel">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onChange={onChange}
            row
            sx={{ columnGap: 1 }}
          >
            {radioOptions?.map((singleOption: OptionTypes) => (
              <FormControlLabel
                key={singleOption.value}
                value={singleOption.value}
                label={singleOption.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default RadioGroupField;
