import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div>
      Error View
      <p>{error?.message}</p>
    </div>
  );
};

export default ErrorPage;
