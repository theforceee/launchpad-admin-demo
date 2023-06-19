import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps, RegisterInputs } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const DateTimePicker = React.memo((props: InputFieldProps) => {
  const { name, control, errors, required, setValue, validate, disabledDate } = props;

  const handleChangeDateTime = (event: any, name: keyof RegisterInputs) => {
    setValue && setValue(name, Math.floor(moment(event).toDate().getTime() / 1000).toString());
  };

  return (
    <div className="flex w-full flex-col">
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
          validate,
        }}
        render={({ field: { value } }) => (
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{
              defaultValue: moment("00:00:00", "HH:mm:ss"),
              format: "HH:mm",
            }}
            value={value ? moment(+value * 1000) : null}
            onChange={(value) => handleChangeDateTime(value, name)}
            disabledDate={disabledDate}
            showSecond={false}
            minuteStep={15}
            className="formInputText"
          />
        )}
      />
      <p className="formErrorMessage">{renderError(errors, name)}</p>
    </div>
  );
});

export default DateTimePicker;
