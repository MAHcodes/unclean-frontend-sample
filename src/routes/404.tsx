import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  alignItems: "center",
});

const NotFound = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return <Container>Oops</Container>;
  }

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data?.message}</i>
      </p>
    </Container>
  );
};

export default NotFound;
