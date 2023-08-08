import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";

const EditButton = (props: ICellRendererParams) => {
  const handleEdit = () => {};

  return (
    <Tooltip title="Edit record">
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
