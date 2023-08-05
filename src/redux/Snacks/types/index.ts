import { SnackbarProps } from "@mui/material";

export interface ISnack extends SnackbarProps {
  severity?: "error" | "warning" | "info" | "success";
}
