import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { DefaultLayout } from "../../components/layout";
import { RegisterInputs } from "../../constants/poolDetail";
import { get } from "../../requests";
import PoolForm from "../PoolsPage/PoolForm";
import { convertApiDataToForm } from "../../utils/campaign";

const PoolDetailPage = () => {
  const params = useParams();
  const [poolData, setPoolData] = useState<RegisterInputs>();

  useEffect(() => {
    const getData = async () => {
      if (!params) return;
      const poolDetailRes = await get(`pool/${params.uuid}`);
      if (poolDetailRes.status !== 200) {
        toast.error("ERROR: Fail to fetch pool detail\n" + poolDetailRes.message);
        return;
      }

      const formData = convertApiDataToForm(poolDetailRes.data);
      setPoolData(formData);
    };
    getData();
  }, [params]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-center text-28/40 font-semibold">INITIAL DEX OFFERING (IDO)</p>

        <div className="mx-auto w-full max-w-7xl">
          <PoolForm poolData={poolData} isEditing={true} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PoolDetailPage;
