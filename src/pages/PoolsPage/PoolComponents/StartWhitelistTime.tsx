import moment from "moment";
import DateTimePicker from "../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../constants/poolDetail";

const StartWhitelistTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, watch } = props;

  const endDate = watch?.("end_join_time");
  const isDeployed = watch?.("pri_is_deployed");

  // const disabledDate: RangePickerProps["disabledDate"] = useCallback(
  //   (currentDate: moment.Moment) => {
  //     if (!endDate) return false;

  //     return currentDate && currentDate.isAfter(endDate);
  //   },
  //   [endDate],
  // );

  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Whitelist Start Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        disabled={isDeployed}
        name="start_join_time"
        register={register}
        setValue={setValue}
        validate={{
          lessOrEqualEndTime: (value) => {
            return !(endDate && value && moment(value).isAfter(endDate));
          },
        }}
        // disabledDate={disabledDate}
      />
    </div>
  );
};

export default StartWhitelistTime;
