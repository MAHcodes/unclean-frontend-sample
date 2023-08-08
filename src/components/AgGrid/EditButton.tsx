import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";
import {
    openFormDialog,
    setFormData
} from "../../redux/FormDialog/slices/formDialog";
import { useAppDispatch } from "../../redux/hooks";
import { ENTITY } from "../../services/Abstractions/EntitiesNames";

const EditButton = (props: ICellRendererParams) => {
  const { data, api } = props;
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(setFormData(data));
    dispatch(openFormDialog(ENTITY.TAGS));
  };

  return (
    <Tooltip title="Edit record">
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
