import EditorField from "../../../components/base/EditorField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const Litepaper = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <div className="flex flex-col w-full">
      <label className="formInputLabel">Litepaper</label>
      <EditorField
        control={control}
        errors={errors}
        name="description"
        register={register}
        setValue={setValue}
      />
    </div>
  );
};

export default Litepaper;
