import clsx from "clsx";
import { useEffect, useState } from "react";
import { PoolFieldProps } from "../../../constants/poolDetail";

type TagTypes = {
  label: string;
  value: string;
};

const tags: Array<TagTypes> = [
  {
    label: "Art",
    value: "art",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
  {
    label: "Platform",
    value: "platform",
  },
  {
    label: "Memberships",
    value: "memberships",
  },
  {
    label: "PFPs",
    value: "PFPs",
  },
  {
    label: "Tools",
    value: "tools",
  },
  {
    label: "DAO",
    value: "dao",
  },
];

const PoolTags = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;

  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

  useEffect(() => {
    const str = selectedTags.join();
    setValue && setValue("tags", str);
  }, [selectedTags]);

  const handleSelectTag = (tagValue: any) => {
    let newTags = [...selectedTags];
    if (newTags.includes(tagValue))
      newTags = newTags.filter((item: string) => item !== tagValue);
    else newTags.push(tagValue);
    setSelectedTags(newTags);
  };

  return (
    <div className="flex items-center">
      <label className="formInputLabel w-fit">Tags</label>

      <div className="ml-4 flex space-x-2">
        {tags.map((item: TagTypes) => (
          <div
            key={item.value}
            className={clsx(
              "flex cursor-pointer items-center justify-center rounded-lg border-2 px-2 py-1",
              selectedTags.includes(item.value) ? "bg-gray-600 text-white" : "",
            )}
            onClick={() => handleSelectTag(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolTags;
