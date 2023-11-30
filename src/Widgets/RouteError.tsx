import { useRouteError } from "react-router-dom";

function RouteError() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default RouteError;
