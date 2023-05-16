import { DefaultLayout } from "../../components/layout";
import PoolForm from "../PoolsPage/PoolForm";

const PoolCreatePage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-28/40 text-center font-semibold">
          INITIAL DEX OFFERING (IDO)
        </p>

        <div className="w-full max-w-7xl mx-auto">
          <PoolForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolCreatePage;
