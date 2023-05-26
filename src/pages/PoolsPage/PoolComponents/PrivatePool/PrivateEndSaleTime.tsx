import moment from "moment";
import DateTimePicker from "../../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateEndSaleTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, watch } = props;

  const startDate = watch && watch("pri_start_buy_time");

  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Sale End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        name="pri_end_buy_time"
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

export default PrivateEndSaleTime;
