import { Theme } from "@mui/material";
import { merge } from "lodash";
import Stack from "./Stack";

const componentsOverrides = (theme: Theme) => {
  return merge(Stack());
};

export default componentsOverrides;
