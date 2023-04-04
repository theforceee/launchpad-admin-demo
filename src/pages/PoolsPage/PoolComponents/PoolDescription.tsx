import React from "react";
import EditorField from "../../../components/base/EditorField";
import { PoolFieldProps } from "../../../constants/poolDetail";

const PoolDescription = (props: PoolFieldProps) => {
  const { control, errors, register, setValue } = props;
  return (
    <EditorField
      label="Pool Description"
      control={control}
      errors={errors}
      name="description"
      register={register}
      setValue={setValue}
    />
  );
};

export default PoolDescription;
