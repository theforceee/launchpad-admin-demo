import { MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";
import { InputFieldProps, OptionTypes } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const SelectField = (props: InputFieldProps) => {
  const { name, control, errors, required, placeholder, selectOptions } = props;

  const { field } = useController({
    name,
    rules: { required },
    control,
  });

  return (
    <div className="flex w-full flex-col">
      <Select
        {...field}
        name={name}
        size="small"
        className="formInputText p-0"
        placeholder={placeholder}
        defaultValue=""
      >
        {selectOptions?.map((item: OptionTypes) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default SelectField;
