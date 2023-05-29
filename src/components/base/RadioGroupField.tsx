import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useController } from "react-hook-form";
import { InputFieldProps, OptionTypes } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const RadioGroupField = (props: InputFieldProps) => {
  const { name, control, errors, required, radioOptions } = props;
  const { field } = useController({
    name,
    rules: { required },
    control,
  });

  return (
    <div className="flex flex-col">
      <RadioGroup {...field} row sx={{ columnGap: 1, flexWrap: "nowrap" }}>
        {radioOptions?.map((singleOption: OptionTypes) => (
          <FormControlLabel
            key={singleOption.value}
            value={singleOption.value}
            label={singleOption.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default RadioGroupField;
