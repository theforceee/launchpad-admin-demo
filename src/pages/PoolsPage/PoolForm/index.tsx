import { Button } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  PoolFieldProps,
  RegisterInputs,
  defaultEmptyPool,
} from "../../../constants/poolDetail";
import TabInfo from "./TabInfo";
import TabMedia from "./TabMedia";
import TabPool from "./TabPool";
import TabToken from "./TabToken";
import EndWhitelistTime from "../PoolComponents/EndWhitelistTime";
import StartWhitelistTime from "../PoolComponents/StartWhitelistTime";
import TabUserList from "./TabUserList";

export interface PoolTabProps extends PoolFieldProps {
  show: boolean;
}

export type PoolFormTypes = {
  poolData?: RegisterInputs | undefined;
};

type PoolNavTypes = {
  label: string;
  value: number;
};
const poolNav: Array<PoolNavTypes> = [
  {
    label: "INFO",
    value: 1,
  },
  {
    label: "TOKEN",
    value: 2,
  },
  {
    label: "POOL",
    value: 3,
  },
  {
    label: "MEDIA",
    value: 4,
  },
  {
    label: "USER LIST",
    value: 5,
  },
];

const PoolForm = (props: PoolFormTypes) => {
  const { poolData } = props;
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onChange",
    defaultValues: poolData ?? defaultEmptyPool,
    reValidateMode: "onChange",
  });

  const [selectedNav, setSelectedNav] = useState<number>(1);

  const handleChangeNav = (navValue: number) => {
    setSelectedNav(navValue);
  };

  console.log("errors", errors);
  const onSubmit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
    console.log(data, errors);
  };

  return (
    <div className="flex-col flex">
      <div className="flex justify-center my-5">
        {poolNav.map((item: PoolNavTypes) => (
          <div
            key={item.value}
            className={clsx(
              "flex-1 flex items-center justify-center cursor-pointer text-20/28 font-medium",
              selectedNav === item.value ? "text-[#606060]" : "text-[#D9D9D9]",
            )}
            onClick={() => handleChangeNav(item.value)}
          >
            <span
              className={
                selectedNav === item.value ? "border-b-8 border-[#606060]" : ""
              }
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div className="w-full">
          <TabInfo
            show={selectedNav === 1}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <TabToken
            show={selectedNav === 2}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <TabPool
            show={selectedNav === 3}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <TabMedia
            show={selectedNav === 4}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <TabUserList
            show={selectedNav === 5}
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            watch={watch}
          />

          {/* <div className="formSection">
            <div className="grid grid-cols-2 gap-x-5">
              <StartWhitelistTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
              <EndWhitelistTime
                control={control}
                errors={errors}
                watch={watch}
                register={register}
                setValue={setValue}
              />
            </div>
          </div> */}
        </div>

        <div className="grid w-full grid-cols-2 gap-5 mt-10">
          <Button
            onClick={() => reset()}
            variant={"contained"}
            size="large"
            color="secondary"
          >
            Reset
          </Button>
          <Button
            onClick={() => handleSubmit(onSubmit)}
            type="submit"
            variant="contained"
            size="large"
            color="warning"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PoolForm;
