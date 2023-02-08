import { DatePicker } from "antd";
import moment from "moment";
import { Controller } from "react-hook-form";
import { InputFieldProps, RegisterInputs } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const DateTimePicker = (props: InputFieldProps) => {
  const { label, name, control, errors, required, setValue } = props;

  const handleChangeDateTime = (event: any, name: keyof RegisterInputs) => {
    console.log("event", moment(event).format());
    setValue && setValue(name, moment(event).format());
  };

  return (
    <div className="formControl">
      <label className="formInputLabel">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={() => (
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{
              defaultValue: moment("00:00:00", "HH:mm:ss"),
              format: "HH:mm",
            }}
            onChange={(value) => handleChangeDateTime(value, name)}
            showSecond={false}
            minuteStep={15}
            className="formInputText"
          />
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
};

export default DateTimePicker;
