import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Sorry!! 404 Page Not Found!</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
