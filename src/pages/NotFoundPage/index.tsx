import clsx from "clsx";
import styles from "./notFound.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <div className={clsx(styles.bg, "relative h-screen w-screen text-center")}>
        <div className="absolute top-0 left-1/2 z-20 flex h-20 w-full max-w-screen-main -translate-x-1/2 items-center px-20">
          <a href="/">{/* <img src="/images/logo-text.svg" alt="" /> */}</a>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col">
            <span
              className={clsx(
                "text-[120px] font-semibold leading-[140px] ",
                "xs:text-[160px] xs:leading-[160px] ",
              )}
            >
              404
            </span>
            <span className="mt-2 text-28/36 font-semibold xs:text-32/40">Page Not Found</span>
            <span className="mt-3 max-w-[320px] text-14/24 opacity-80 xs:max-w-none xs:text-16/24">
              The page you are looking for doesn't exist or has been moved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
