import DateTimePicker from "../../../../components/base/DateTimePicker";
import { PoolFieldProps } from "../../../../constants/poolDetail";

const PublicEndFCFSTime = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;

  return (
    <div className="flex flex-1">
      <label className="formInputLabel">FCFS End Time</label>
      <DateTimePicker
        control={control}
        errors={errors}
        disabled={true}
        name="pub_end_buy_time"
        register={register}
        setValue={setValue}
        // validate={{}}
      />
    </div>
  );
};

export default PublicEndFCFSTime;
