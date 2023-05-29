import clsx from "clsx";
import { PoolTabProps } from ".";
import Featured from "../PoolComponents/Featured";
import Litepaper from "../PoolComponents/Litepaper";
import PoolAbout from "../PoolComponents/PoolAbout";
import PoolLinks from "../PoolComponents/PoolLinks";
import PoolName from "../PoolComponents/PoolName";
import PoolSlug from "../PoolComponents/PoolSlug";
import PoolTags from "../PoolComponents/PoolTags";

const TabInfo = (props: PoolTabProps) => {
  const {
    show = false,
    control,
    errors,
    register,
    setValue,
    watch,
    poolData,
    isEditing,
  } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="formRow">
          <PoolName control={control} errors={errors} register={register} />
          <PoolSlug control={control} errors={errors} register={register} />
          <Featured control={control} errors={errors} register={register} />
        </div>

        <PoolLinks control={control} errors={errors} register={register} />

        <div className="flex w-full flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label className="formInputLabel">About</label>

            <PoolTags
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
              watch={watch}
              poolData={poolData}
            />
          </div>
          <PoolAbout
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
            poolData={poolData}
            isEditing={isEditing}
          />
        </div>

        <Litepaper
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          poolData={poolData}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
};

export default TabInfo;
