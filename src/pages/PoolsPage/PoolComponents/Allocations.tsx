import NumberField from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const Allocations = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;

  return (
    <div className="flex w-1/5 flex-col">
      <div className="mb-5 pr-10 text-right text-16/24 font-bold">Allocations</div>
      <div className="flex items-center pl-20 text-16/24">
        <span className="w-full font-bold text-gray-500">VC</span>

        <NumberField
          setValue={setValue}
          control={control}
          errors={errors}
          name="allocation_venture_capital"
          register={register}
          required
        />
        <span className="ml-3 font-bold">%</span>
      </div>

      <div className="flex items-center pl-20 text-16/24">
        <span className="w-full font-bold text-gray-500">Private</span>

        <NumberField
          setValue={setValue}
          control={control}
          errors={errors}
          name="allocation_private"
          register={register}
          required
        />
        <span className="ml-3 font-bold">%</span>
      </div>

      <div className="flex items-center pl-20 text-16/24">
        <span className="w-full font-bold text-gray-500">Public</span>

        <NumberField
          setValue={setValue}
          control={control}
          errors={errors}
          name="allocation_public"
          register={register}
          required
        />
        <span className="ml-3 font-bold">%</span>
      </div>
    </div>
  );
};

export default Allocations;
