import { useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Opps</h1>
      <h2>Something went wrong</h2>
      <h3>
        {useRouteError().status}: {useRouteError().statusText}
      </h3>
    </div>
  );
};

export default Error;
