import moment from "moment";
import DateTimePicker from "../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../constants/poolDetail";

const EndWhitelistTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, watch } = props;

  const startDate = watch && watch("start_whitelist_time");

  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Whitelist End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        name="end_whitelist_time"
        register={register}
        setValue={setValue}
        validate={{
          greaterOrEqualStartTime: (value) => {
            return !(startDate && value && moment(value).isBefore(startDate));
          },
        }}
      />
    </div>
  );
};

export default EndWhitelistTime;
