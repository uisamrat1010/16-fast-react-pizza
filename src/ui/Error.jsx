import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <h3>{err.data || err.message}</h3>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
