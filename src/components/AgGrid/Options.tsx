import { Stack } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const Options = (props: ICellRendererParams) => {
  return (
    <Stack direction="row">
      <EditButton {...props} />
      <DeleteButton {...props} />
    </Stack>
  );
};

export default Options;
