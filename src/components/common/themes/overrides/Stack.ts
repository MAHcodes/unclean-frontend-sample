import { Components } from "@mui/material";

const Stack = (): Pick<Components, "MuiStack"> => {
  return {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
        alignItems: "center",
      },
    },
  };
};
export default Stack;
