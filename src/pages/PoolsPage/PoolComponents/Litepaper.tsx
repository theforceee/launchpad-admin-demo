import EditorField from "../../../components/base/EditorField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const Litepaper = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, poolData, isEditing } = props;

  if (isEditing && !poolData?.about) return <></>;

  return (
    <div className="flex w-full flex-col">
      <label className="formInputLabel">Litepaper</label>
      <EditorField
        control={control}
        errors={errors}
        name="litepaper"
        required
        register={register}
        setValue={setValue}
        defaultValue={poolData?.litepaper}
      />
    </div>
  );
};

export default Litepaper;
