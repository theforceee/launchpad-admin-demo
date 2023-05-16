import { useState } from "react";
import { DefaultLayout } from "../../components/layout";
import { Button } from "@mui/material";
import PlusIcon from "@mui/icons-material/Add";

const ContentsPage = () => {
  const [homeBanners, setHomeBanners] = useState<string[]>([]);

  return (
    <DefaultLayout>
      <div className="flex flex-col w-full">
        <p className="">HOMEPAGE BANNERS</p>
        <div className="grid grid-cols-3 gap-4 w-full">
          <button className="flex w-full h-24 bg-gray-400 items-center justify-center cursor-pointer">
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
