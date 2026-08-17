import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error Occured</h1>
      <h3>Please try again later</h3>
    </div>
  );
};

export default Error;
