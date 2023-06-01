import { DatePicker } from "antd";
import clsx from "clsx";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { SEPARATOR } from "../../../components/base/NumberField";
import { PoolFieldProps } from "../../../constants/poolDetail";

type EmissionTypes = {
  release_time: number | undefined;
  release_percent: string;
};

const ClaimEmissions = (props: PoolFieldProps) => {
  const { control, errors, register, setValue, poolData } = props;

  const [claimEmissions, setClaimEmissions] = useState<EmissionTypes[]>([
    { release_time: undefined, release_percent: "" },
  ]);

  useEffect(() => {
    if (!poolData?.token_release) return;

    const emissions = (poolData.token_release as any).map((item: any) => ({
      release_percent: item?.release_percent + "",
      release_time: item?.release_time,
    }));
    setClaimEmissions(emissions);
  }, [poolData?.token_release]);

  useEffect(() => {
    setValue && setValue("token_release", JSON.stringify(claimEmissions));
  }, [claimEmissions]);

  const displayNumOrder = (index: number) => {
    switch (index) {
      case 0:
        return "1st";
      case 1:
        return "2nd";
      case 2:
        return "3rd";
      default:
        return `${index + 1}th`;
    }
  };

  const handleChangeDateTime = (event: any, index: number) => {
    const newEmissions = [...claimEmissions];
    newEmissions[index].release_time = Math.floor(
      new Date(event).getTime() / 1000,
    );
    setClaimEmissions(newEmissions);
  };

  const handleChangeNumber = (
    event: ChangeEvent<HTMLInputElement> | undefined,
    index: number,
  ) => {
    const inputValue = event?.target.value || "";
    const newValue = inputValue.split(SEPARATOR).join("");
    const newEmissions = [...claimEmissions];
    newEmissions[index].release_percent = newValue;
    setClaimEmissions(newEmissions);
  };

  const handleRemove = (indexToRemove: number) => {
    const updatedArray = [...claimEmissions].filter(
      (_, index) => index !== indexToRemove,
    );
    setClaimEmissions(updatedArray);
  };
  const handleAddNew = () => {
    setClaimEmissions((prevArray) => [
      ...prevArray,
      { release_time: undefined, release_percent: "" },
    ]);
  };

  return (
    <div className="flex w-2/5 flex-col">
      <div className="mb-5 pr-10 text-right text-16/24 font-bold">
        Claim Emissions
      </div>
      {claimEmissions.map((emission: EmissionTypes, index: number) => {
        return (
          <div className="mb-2 flex items-center pl-10 text-16/24" key={index}>
            <input
              type="button"
              value="-"
              onClick={() => handleRemove(index)}
              className={clsx(
                "ml-7 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 font-bold",
                index === 0 && "invisible",
              )}
            ></input>
            <span className="mx-3 text-gray-500">{displayNumOrder(index)}</span>

            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: moment("00:00:00", "HH:mm:ss"),
                format: "HH:mm",
              }}
              value={
                emission.release_time
                  ? moment(emission.release_time * 1000)
                  : undefined
              }
              onChange={(value) => handleChangeDateTime(value, index)}
              showSecond={false}
              minuteStep={15}
              className="formInputText"
            />

            <NumericFormat
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChangeNumber(event, index)
              }
              value={emission.release_percent}
              thousandSeparator={true}
              className="formInputText ml-2 w-20"
            />
            <span className="ml-3 font-bold">%</span>
          </div>
        );
      })}

      <div className="flex items-center pl-10 text-16/24">
        <input
          type="button"
          value="Add new"
          className="mr-2 w-40 cursor-pointer rounded-full border-2 border-gray-500 text-14/32"
          onClick={handleAddNew}
        />
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabled
          showTime={{
            defaultValue: moment("00:00:00", "HH:mm:ss"),
            format: "HH:mm",
          }}
          showSecond={false}
          minuteStep={15}
          className="formInputText"
        />

        <NumericFormat
          disabled
          thousandSeparator={true}
          className="formInputText ml-2 w-20"
        />
        <span className="ml-3 font-bold">%</span>
      </div>
    </div>
  );
};

export default ClaimEmissions;
