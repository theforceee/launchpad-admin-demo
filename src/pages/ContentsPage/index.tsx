import { useState } from "react";
import { DefaultLayout } from "../../components/layout";
import { Button } from "@mui/material";
import PlusIcon from "@mui/icons-material/Add";

const ContentsPage = () => {
  const [homeBanners, setHomeBanners] = useState<string[]>([]);

  return (
    <DefaultLayout>
      <div className="flex w-full flex-col">
        <p className="">HOMEPAGE BANNERS</p>
        <div className="grid w-full grid-cols-3 gap-4">
          <button className="flex h-24 w-full cursor-pointer items-center justify-center bg-gray-400">
            <div className="flex items-center justify-center">
              <PlusIcon />
              <span className="">Upload</span>
            </div>
            <input hidden accept="image/*" multiple type="file" />
          </button>

          <Button
            variant="contained"
            component="label"
            // startIcon={<PlusIcon />}
          >
            <div className="flex items-center justify-center">
              <PlusIcon />
              <span className="">Upload</span>
            </div>
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContentsPage;
