import moment from "moment";
import DateTimePicker from "../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../constants/poolDetail";

const EndSaleTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, watch } = props;

  const startDate = watch && watch("start_buy_time");

  return (
    <div className="flex flex-1">
      <label className="formInputLabelShort">Sale End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        name="end_buy_time"
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

export default EndSaleTime;
