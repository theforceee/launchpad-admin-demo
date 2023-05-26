import clsx from "clsx";
import { useState } from "react";
import { PoolTabProps } from ".";
import TabPoolPrivate from "./TabPoolPrivate";
import TabPoolPublic from "./TabPoolPublic";

const poolNav = [
  {
    value: "private",
    label: "Private",
  },
  {
    value: "public",
    label: "Public",
  },
];

const TabPool = (props: PoolTabProps) => {
  const {
    show = false,
    control,
    errors,
    register,
    setValue,
    watch,
    deployPool,
  } = props;

  const [activedNav, setActivedNav] = useState<"private" | "public">("private");

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="formSection">
        <div className="items-center, flex justify-center space-x-20 text-18/32">
          {poolNav.map((item: any) => (
            <div
              key={item.value}
              className={clsx(
                "flex cursor-pointer rounded-full border-4 px-10 font-bold uppercase",
                activedNav === item.value
                  ? "border-gray-600 text-gray-600"
                  : "border-white text-gray-400",
              )}
              onClick={() => setActivedNav(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <TabPoolPrivate
          show={activedNav === "private"}
          control={control}
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />

        <TabPoolPublic
          show={activedNav === "public"}
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

export default TabPool;
