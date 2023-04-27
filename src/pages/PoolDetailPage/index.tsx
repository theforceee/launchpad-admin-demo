import { DefaultLayout } from "../../components/layout";
import { defaultEmptyPool } from "../../constants/poolDetail";
import PoolForm from "../PoolsPage/PoolForm";

const PoolDetailPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full">
        <PoolForm poolData={defaultEmptyPool} />
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
