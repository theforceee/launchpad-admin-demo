import { DefaultLayout } from "../../components/layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { URLS } from "../../constants";

const PoolsPage = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="">
        <Button
          size="large"
          variant="contained"
          className="h-fit"
          onClick={() => navigate(URLS.CREATE_POOL)}
        >
          Create Pool
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default PoolsPage;
