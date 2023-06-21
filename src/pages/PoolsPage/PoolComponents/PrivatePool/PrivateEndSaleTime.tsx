import moment from "moment";
import DateTimePicker from "../../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PrivateEndSaleTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, watch } = props;

  const startDate = watch?.("pri_start_buy_time");
  const isDeployed = watch?.("pri_is_deployed");

  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Sale End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        disabled={isDeployed}
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
