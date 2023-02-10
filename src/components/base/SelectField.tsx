import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps, OptionTypes } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const SelectField = (props: InputFieldProps) => {
  const { label, name, control, errors, required, placeholder, selectOptions } =
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
        render={({ field: { name, onChange } }) => (
          <Select
            name={name}
            onChange={onChange}
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
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default SelectField;
