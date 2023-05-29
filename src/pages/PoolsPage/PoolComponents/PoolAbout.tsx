import EditorField from "../../../components/base/EditorField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolAbout = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, poolData, isEditing } = props;

  if (isEditing && !poolData?.about) return <></>;

  return (
    <div className="flex w-full flex-col">
      <EditorField
        control={control}
        errors={errors}
        name="about"
        defaultValue={poolData?.about}
        register={register}
        setValue={setValue}
      />
    </div>
  );
};

export default PoolAbout;
