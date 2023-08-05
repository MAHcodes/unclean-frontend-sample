import { Backdrop, CircularProgress } from "@mui/material";
import { FC } from "react";

interface ILoaderProps {
  fullscreen?: boolean;
}

const Loader: FC<ILoaderProps> = ({ fullscreen = false }) =>
  fullscreen ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CircularProgress color="inherit" />
  );

export default Loader;
