import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
import { convertApiDataToForm } from "../../utils/campaign";
import PoolForm from "../PoolsPage/PoolForm";

const PoolCreatePage = () => {
  const location: any = useLocation();
  const [poolDetailClone, setPoolDetailClone] = useState<RegisterInputs>();

  useEffect(() => {
    if (!location.state?.poolData) return;
    const poolData = { ...location.state?.poolData, id: undefined };
    setPoolDetailClone(convertApiDataToForm(poolData));
  }, [location]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-center text-28/40 font-semibold">INITIAL DEX OFFERING (IDO)</p>

        <div className="mx-auto w-full max-w-7xl">
          <PoolForm poolData={poolDetailClone} isEditing={false} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolCreatePage;
