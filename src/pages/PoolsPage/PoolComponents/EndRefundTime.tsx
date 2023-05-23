import DateTimePicker from "../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../constants/poolDetail";

const EndRefundTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;

  return (
    <div className="flex flex-1">
      <label className="formInputLabel">Refund End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        name="end_refund_time"
        register={register}
        setValue={setValue}
      />
    </div>
  );
};

export default EndRefundTime;
