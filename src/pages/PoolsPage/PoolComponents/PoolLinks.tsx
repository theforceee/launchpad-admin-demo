import TextField from "../../../components/base/TextField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolLinks = (props: PoolFieldProps) => {
  const { control, errors, register } = props;
  return (
    <div className="flex ">
      <label className="formInputLabel">Links</label>

      <div className="grid w-full grid-cols-2 gap-4">
        <TextField
          control={control}
          errors={errors}
          name="website"
          register={register}
          placeholder="Website"
          required
        />
        <TextField
          control={control}
          errors={errors}
          name="twitter"
          register={register}
          placeholder="Twitter"
          required
        />
        <TextField
          control={control}
          errors={errors}
          name="telegram"
          register={register}
          placeholder="Telegram"
          required
        />
        <TextField
          control={control}
          errors={errors}
          name="discord"
          register={register}
          placeholder="Discord"
          required
        />
      </div>
    </div>
  );
};

export default PoolLinks;