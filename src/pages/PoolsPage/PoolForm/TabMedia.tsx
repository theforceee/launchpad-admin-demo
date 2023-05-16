import clsx from "clsx";
import { PoolTabProps } from ".";

const TabMedia = (props: PoolTabProps) => {
  const { show = false } = props;

  return (
    <div className={clsx(show ? "block" : "hidden")}>
      <div className="grid grid-cols-4 gap-10">
        {new Array(8).fill(1).map((item, index: number) => (
          <button
            key={index}
            className="flex w-full h-40 bg-gray-300 items-center justify-center cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <span className="font-semibold">
                + ADD <br /> IMAGE/VIDEO
              </span>
            </div>
            <input hidden accept="image/*" multiple type="file" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabMedia;
