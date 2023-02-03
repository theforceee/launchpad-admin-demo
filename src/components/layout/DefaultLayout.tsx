import SideBar from "./SideBar";

type LayoutProps = {
  children?: React.ReactElement;
};
const DefaultLayout = (props: LayoutProps) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex w-full px-8 py-16">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
