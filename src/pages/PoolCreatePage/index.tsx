import React from "react";
import { DefaultLayout } from "../../components/layout";
import PoolForm from "../PoolsPage/PoolForm";

const PoolCreatePage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full">
        <PoolForm />
      </div>
    </DefaultLayout>
  );
};

export default PoolCreatePage;
