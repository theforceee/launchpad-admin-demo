import clsx from "clsx";
import { PoolTabProps } from ".";
import Featured from "../PoolComponents/Featured";
import Litepaper from "../PoolComponents/Litepaper";
import PoolAbout from "../PoolComponents/PoolAbout";
import PoolLinks from "../PoolComponents/PoolLinks";
import PoolName from "../PoolComponents/PoolName";
import PoolSlug from "../PoolComponents/PoolSlug";

const TabInfo = (props: PoolTabProps) => {
  const { show = false, control, errors, register, setValue, watch } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="formRow">
          <PoolName control={control} errors={errors} register={register} />
          <PoolSlug control={control} errors={errors} register={register} />
          <Featured control={control} errors={errors} register={register} />
        </div>

        <PoolLinks control={control} errors={errors} register={register} />

        <PoolAbout
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />

        <Litepaper
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />
      </div>
    </div>
  );
};

export default TabInfo;
