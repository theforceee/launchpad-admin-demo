import { DatePicker } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps, RegisterInputs } from "../../constants/poolDetail";
import { renderError } from "../../utils/validate";

const DateTimePicker = React.memo((props: InputFieldProps) => {
  const { name, control, errors, required, setValue, validate, disabledDate } =
    props;

  useEffect(() => {
    setValue && setValue(name, moment().format());
  }, [name, setValue]);

  const handleChangeDateTime = (event: any, name: keyof RegisterInputs) => {
    setValue && setValue(name, moment(event).format());
  };

  return (
    <div className="flex flex-col w-full">
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
          validate,
        }}
        render={() => (
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{
              defaultValue: moment("00:00:00", "HH:mm:ss"),
              format: "HH:mm",
            }}
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
