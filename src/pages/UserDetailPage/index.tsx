import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { DefaultLayout } from "../../components/layout";
import { get } from "../../requests";

const UserDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (!params) return;
      const userDetailRes = await get(`account/user/${params.uuid}`);
      console.log("userDetailRes", userDetailRes);
      if (userDetailRes.status !== 200) {
        toast.error("ERROR: Fail to fetch user detail\n" + userDetailRes.statusText);
        return;
      }
    };
    getData();
  }, [params]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="text-center text-28/40 font-semibold">USERS</p>

        <div className="mx-auto w-full max-w-7xl">{params.uuid}</div>

        <button
          onClick={() => navigate(-1)}
          className="flex h-[30px] w-fit items-center justify-center rounded-md bg-[#606060] px-5 text-white"
        >
          Back
        </button>
      </div>
    </DefaultLayout>
  );
};

export default UserDetailPage;
