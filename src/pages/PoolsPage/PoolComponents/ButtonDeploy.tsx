import clsx from "clsx";
import { useMemo } from "react";

type ButtonDeployProps = {
  deployPool: any;
  poolType: "public" | "private";
  isDeployed: boolean | undefined;
  isEditing: boolean | undefined;
};

const BUTTON_STATUS = {
  CREATING: "creating",
  CREATED: "created",
  DEPLOYED: "deployed",
};

const ButtonDeploy = (props: ButtonDeployProps) => {
  const { deployPool, poolType, isDeployed, isEditing } = props;

  const buttonStatus = useMemo(() => {
    if (isDeployed) return BUTTON_STATUS.DEPLOYED;

    if (!isEditing) return BUTTON_STATUS.CREATING;

    return BUTTON_STATUS.CREATED;
  }, [isDeployed, isEditing]);

  const buttonClassByStatus = useMemo(() => {
    switch (buttonStatus) {
      case BUTTON_STATUS.CREATING:
        return {
          text: "Awaiting Project Creation",
          className: "border-gray-400 text-gray-400",
        };
      case BUTTON_STATUS.CREATED:
        return {
          text: "Deploy Pool Smart Contract",
          className: "border-green-500 bg-green-500 text-white",
        };
      case BUTTON_STATUS.DEPLOYED:
      default:
        return {
          text: "Smart Contract Deployed",
          className: "border-[#12B31C] bg-transparent text-[#12B31C]",
        };
    }
  }, [buttonStatus]);

  return (
    <input
      type="button"
      disabled={buttonStatus !== BUTTON_STATUS.CREATED}
      value={buttonClassByStatus.text}
      onClick={() => deployPool?.(poolType)}
      className={clsx(
        "ml-auto h-min w-full max-w-xs cursor-pointer rounded-lg border-2 py-2 font-semibold disabled:cursor-not-allowed",
        "",
        buttonClassByStatus.className,
      )}
    />
  );
};

export default ButtonDeploy;
