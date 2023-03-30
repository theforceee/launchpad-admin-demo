import DateTimePicker from "../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../constants/poolDetail";

const StartBuyTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <>
      <DateTimePicker
        label="Start Time"
        control={control}
        errors={errors}
        name="start_buy_time"
        register={register}
        setValue={setValue}
      />
    </>
  );
};

export default StartBuyTime;
